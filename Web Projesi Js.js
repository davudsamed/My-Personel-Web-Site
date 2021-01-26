function regKontrol(pattern, value) {
     r = new RegExp(pattern, "g");
     return r.test(value);
}

function formKontrol(form) {

     patternEposta = "^" + "([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\.\-]+)" +
          "@" + "([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\.\-]+)" + "[\.]" +
          "([abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0-9_\.\-]+)" + "$";

     if (!regKontrol(patternEposta, form.email.value)) {
          alert("Lütfen Doğru Bir E-posta Adresi Giriniz.");
          form.email.value = "";
          form.email.focus();
          return false;
     }
     return true;
}