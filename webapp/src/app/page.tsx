import Link from "next/link";
import styles from "./page.module.css";

const highlights = [
  {
    title: "تجربة ترحيبية غامرة",
    description:
      "استكشف صفحة عربية أنيقة تعبر عن دفء التحية الرقمية وتقدم لك تجربة تفاعلية بسيطة.",
  },
  {
    title: "تصميم يتكيف مع جميع الأجهزة",
    description:
      "الصفحة تستجيب تلقائياً للأجهزة المختلفة لتبقى التحية واضحة وجميلة أينما كنت.",
  },
  {
    title: "انطلاقة لمشاريع عربية",
    description:
      "استخدم هذه الصفحة كنقطة انطلاق لبناء منتجات ومجتمعات رقمية بلغة عربية أصيلة.",
  },
];

const steps = [
  "تصفح الأقسام الثلاثة لاكتشاف الرسالة والقيم والرؤية.",
  "اضغط على زر \"ابدأ الآن\" لإطلاق مشروعك القادم.",
  "تواصل معنا عبر البريد إذا رغبت في التعاون أو طرح الأفكار.",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.kicker}>أهلاً وسهلاً</p>
          <h1>مرحباً بك في واحتنا الرقمية</h1>
          <p className={styles.lead}>
            مساحة عربية تحتفي بالتواصل والإبداع، وتمنحك بداية بصرية مشرقة لأي
            مشروع أو فعالية تريد تقديمها للعالم.
          </p>
          <div className={styles.actions}>
            <Link href="#explore" className={styles.primary}>
              ابدأ الآن
            </Link>
            <Link href="#contact" className={styles.secondary}>
              تواصل معنا
            </Link>
          </div>
        </section>

        <section id="explore" className={styles.section}>
          <h2>لماذا هذه الصفحة؟</h2>
          <p className={styles.sectionIntro}>
            صُممت لتكون مثالاً عملياً لواجهة عربية معاصرة تجمع بين الخطوط
            الواضحة والألوان الهادئة وتوفر تجربة سلسة وسريعة.
          </p>
          <div className={styles.cards}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>كيف تستفيد منها؟</h2>
          <ul className={styles.steps}>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <h2>تواصل معنا</h2>
          <p className={styles.sectionIntro}>
            يسعدنا سماع أفكارك. أرسل رسالة قصيرة وسنرد عليك خلال ٢٤ ساعة.
          </p>
          <form className={styles.form}>
            <label className={styles.label}>
              بريدك الإلكتروني
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </label>
            <label className={styles.label}>
              رسالتك
              <textarea
                name="message"
                placeholder="كيف يمكننا مساعدتك؟"
                rows={4}
                required
              />
            </label>
            <button type="submit">إرسال</button>
          </form>
        </section>
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} واحة الترحيب الرقمية. كل الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
