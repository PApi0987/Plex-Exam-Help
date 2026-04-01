import { auth, db } from "./firebase.js";
import { doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

export function payPremium() {

  const user = auth.currentUser;

  if (!user) {
    alert("Login first");
    window.location.href = "login.html";
    return;
  }

  PaystackPop.setup({
    key: "sk_live_b7a3fb781073801edaf4f6046af944254ec0808b",
    email: user.email,
    amount: 200000,

    callback: async (response) => {
      if (!response.reference) return;

      await updateDoc(doc(db, "users", user.uid), {
        premium: true,
        paymentRef: response.reference,
        paidAt: Date.now()
      });

      alert("Premium activated 🎉");
    }
  }).openIframe();
}
