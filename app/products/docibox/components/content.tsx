import { BookOpenText, LibraryBig, UsersRound } from "lucide-react";

const audiences = [
  {
    title: "کتابخانهٔ خودت",
    text: "قفسه‌ها و دسته‌بندی‌ها را خودت بچین و هر سند را امن نگه دار.",
    icon: LibraryBig,
  },
  {
    title: "منابع مجموعه",
    text: "منابع فیزیکی و دیجیتال مجموعه‌ات را منظم، جست‌وجوپذیر و در دسترس کن.",
    icon: BookOpenText,
  },
  {
    title: "یک فضای مشترک",
    text: "کتابخانه‌ها، ناشران و کاربران در یک تجربهٔ یکپارچه به هم نزدیک می‌شوند.",
    icon: UsersRound,
  },
];

export function ProductManifesto() {
  return (
    <section className="flex mx-auto px-7 pt-12 pb-36 gap-20 max-w-7xl max-sm:flex-col max-sm:px-4 max-sm:pb-24 max-sm:gap-8">
      <p className="w-1/3 text-muted max-sm:w-full">
        داکیباکس از یک ایده شروع شد:
      </p>
      <h2 className="w-2/3 text-7xl leading-tight font-extrabold tracking-tighter max-sm:w-full max-sm:text-4xl">
        منابع پراکنده، کتابخانه‌ها، ناشران و کاربران را در یک فضای مشترک به هم
        نزدیک کنیم.
      </h2>
    </section>
  );
}
export function ProductAudiences() {
  return (
    <section className="flex mx-auto px-7 pb-32 gap-4 max-w-7xl max-sm:flex-col max-sm:px-4">
      {audiences.map((item, index) => {
        const Icon = item.icon;
        return (
          <article
            className="group flex flex-1 flex-col relative min-h-80 overflow-hidden bg-white/65 border border-line backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:border-accent hover:shadow-xl p-8 rounded-3xl"
            key={item.title}
          >
            <i className="absolute left-2/3 top-2/3 size-44 bg-accent/10 blur-3xl transition duration-500 group-hover:scale-150 rounded-full" />
            <div className="flex relative items-center justify-between">
              <span className="font-sans text-xs text-muted">0{index + 1}</span>
              <span className="flex items-center justify-center size-12 bg-panel text-accent transition duration-500 group-hover:bg-accent group-hover:text-white group-hover:rotate-6 rounded-2xl">
                <Icon className="size-6 stroke-[1.5]" />
              </span>
            </div>
            <div className="relative mt-[20%]">
              <h3 className="text-3xl font-bold transition group-hover:text-accent">
                {item.title}
              </h3>
              <p className="max-w-xs leading-8 text-muted mt-4">{item.text}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
