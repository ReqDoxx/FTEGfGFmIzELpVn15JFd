import { useEffect, useState } from 'react';

interface SysItem { key: string; value: string; }

function detectBrowser(ua: string): string {
  if (ua.includes('Firefox'))     return 'Firefox';
  if (ua.includes('Edg'))         return 'Microsoft Edge';
  if (ua.includes('OPR'))         return 'Opera';
  if (ua.includes('Chrome'))      return 'Google Chrome';
  if (ua.includes('Safari'))      return 'Safari';
  return 'Unknown';
}

function detectOS(ua: string): string {
  if (ua.includes('Windows NT 10')) return 'Windows 10/11';
  if (ua.includes('Windows'))       return 'Windows';
  if (ua.includes('Mac OS'))        return 'macOS';
  if (ua.includes('Linux'))         return 'Linux';
  if (ua.includes('Android'))       return 'Android';
  if (ua.includes('iPhone'))        return 'iOS (iPhone)';
  if (ua.includes('iPad'))          return 'iOS (iPad)';
  return 'Unknown';
}

function Footer() {
  const [sysInfo, setSysInfo] = useState<SysItem[]>([]);

  useEffect(() => {
    const ua = navigator.userAgent;
    const info: Record<string, string> = {
      'Browser':              detectBrowser(ua),
      'OS':                   detectOS(ua),
      'Platform':             navigator.platform || 'N/A',
      'Language':             navigator.language,
      'Languages':            navigator.languages?.join(', ') || 'N/A',
      'Cookies Enabled':      navigator.cookieEnabled ? 'Yes' : 'No',
      'Online':               navigator.onLine ? 'Yes' : 'No',
      'Screen Resolution':    `${screen.width} × ${screen.height}`,
      'Viewport':             `${window.innerWidth} × ${window.innerHeight}`,
      'Color Depth':          `${screen.colorDepth} bit`,
      'Pixel Ratio':          `${window.devicePixelRatio}x`,
      'Timezone':             Intl.DateTimeFormat().resolvedOptions().timeZone,
      'Hardware Concurrency': `${navigator.hardwareConcurrency} cores`,
      'Touch Support':        ('ontouchstart' in window) ? 'Yes' : 'No',
      'User Agent':           ua,
      'Last Visit':           new Date().toLocaleString(),
    };

    Object.entries(info).forEach(([k, v]) => localStorage.setItem(k, v));

    const stored: SysItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)!;
      stored.push({ key, value: localStorage.getItem(key) ?? '' });
    }
    setSysInfo(stored);
  }, []);

  return (
    <footer className="pb-12">
      <div className="h-px w-full opacity-40 mb-6
        bg-gradient-to-r from-transparent via-emerald-500 to-transparent
        dark:via-[#7DF9AA]" />

      <p className="text-center text-[11px] tracking-[0.12em] mb-6
        text-slate-400 dark:text-[#7070a0]">
        © 2026 Nazar Pidvirnyi. All rights reserved.
      </p>

      {sysInfo.length > 0 && (
        <div className="rounded-xl p-5 text-[11px]
          bg-white dark:bg-[#111118]
          border border-slate-200 dark:border-white/[0.07]">
          <h3 className="font-syne text-[9px] tracking-[0.22em] uppercase mb-4
            text-slate-400 dark:text-[#7070a0]">
            💾 Browser &amp; System Info (localStorage)
          </h3>
          <div className="space-y-1">
            {sysInfo.map(({ key, value }) => (
              <div key={key} className="flex gap-3 py-1
                border-b border-slate-100 dark:border-white/[0.04] last:border-0">
                <span className="min-w-[160px] shrink-0
                  text-emerald-600 dark:text-[#7DF9AA]">{key}</span>
                <span className="break-all
                  text-slate-500 dark:text-[#e8e8f0]/70">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </footer>
  );
}

export default Footer;