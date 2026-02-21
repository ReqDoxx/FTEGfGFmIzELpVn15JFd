import { useState, useEffect } from 'react';

interface Comment { id: number; name: string; email: string; body: string; }

const VARIANT = 5; // ← свій номер варіанту

function Reviews() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then(res => { if (!res.ok) throw new Error(); return res.json(); })
      .then((data: Comment[]) => { setComments(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  return (
    <section>
      <h2 className="font-syne text-[10px] tracking-[0.25em] uppercase mb-5 flex items-center gap-3
        text-slate-400 dark:text-[#7070a0]">
        Employer Comments
        <span className="flex-1 h-px bg-slate-200 dark:bg-white/[0.07]" />
      </h2>

      {loading && <p className="text-sm italic text-slate-400 dark:text-[#7070a0]">⏳ Loading comments...</p>}
      {error   && <p className="text-sm text-red-500">⚠️ Failed to load comments.</p>}

      {!loading && !error && (
        <div className="space-y-3">
          {comments.map(c => (
            <div key={c.id} className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-1
              bg-white dark:bg-[#111118]
              border border-slate-200 dark:border-white/[0.07]
              hover:border-emerald-300 dark:hover:border-[#7DF9AA]/20
              shadow-sm dark:shadow-none">
              <p className="font-syne text-xs font-bold mb-1
                text-emerald-600 dark:text-[#7DF9AA]">{c.name}</p>
              <p className="text-[11px] mb-3
                text-slate-400 dark:text-[#7070a0]">{c.email}</p>
              <p className="text-sm leading-relaxed
                text-slate-600 dark:text-[#e8e8f0]/80">{c.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;