// AUTH.js
/* eslint-disable no-undef */
const api = require("./api-origin");
const prompt = require("prompt");
const { sendMessage } = require("./updates");


async function getUser() {
  try {
    const user = await api.call("users.getFullUser", {
      id: {
        _: "inputUserSelf",
      },
    });

    return user;
  } catch (error) {
    return null;
  }
}

function signIn({ code, phone, phone_code_hash }) {
  return api
    .call("auth.signIn", {
      phone_code: code,
      phone_number: phone,
      phone_code_hash: phone_code_hash,
    })
    .then((v) => {
      console.log("LOGIN SUCCESS: ", v);
      sendMessage();
    })
    .catch((e) => console.log("LOGIN FAIL: ", e));
}

function sendCode(phone) {
  return api.call("auth.sendCode", {
    phone_number: phone,
    settings: {
      _: "codeSettings",
    },
  });
}



(async () => {
  const user = await getUser();

  // const phone = "+9XXXXXXXXXX";

  if (!user) {
    const { phone } = await prompt.get("phone");
    const { phone_code_hash } = await sendCode(phone);

    const { code } = await prompt.get("code");
    try {
      const signInResult = await signIn({
        code,
        phone,
        phone_code_hash,
      });

      if (signInResult._ === "auth.authorizationSignUpRequired") {
        await signUp({
          phone,
          phone_code_hash,
        });
      }
    } catch (error) {
      if (error.error_message !== "SESSION_PASSWORD_NEEDED") {
        console.log(`error:`, error);

        return;
      }

      // 2FA

      const password = "USER_PASSWORD";

      const { srp_id, current_algo, srp_B } = await getPassword();
      const { g, p, salt1, salt2 } = current_algo;

      const { A, M1 } = await api.mtproto.crypto.getSRPParams({
        g,
        p,
        salt1,
        salt2,
        gB: srp_B,
        password,
      });

      const checkPasswordResult = await checkPassword({ srp_id, A, M1 });
    }
  }

})();

