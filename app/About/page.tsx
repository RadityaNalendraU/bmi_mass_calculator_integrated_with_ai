// Ini adalah halaman "Tentang" untuk aplikasi Kalkulator BMI Cerdas.
// Halaman ini memberikan informasi tentang misi aplikasi, tumpukan teknologi, dan fitur AI-nya.

export default function AboutPage() {
  return (
    // Kontainer utama dengan jarak vertikal antar bagian
    <div className="space-y-8">
      
      {/* Bagian Header: Nama aplikasi dan slogan */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Smart BMI Advisor</h1>
        <p className="mt-2 text-lg text-slate-600">
          Panduan personal Anda menuju gaya hidup yang lebih sehat.
        </p>
      </div>

      {/* Bagian konten utama dengan gaya dari kelas prose Tailwind */}
      <div className="prose prose-slate max-w-none space-y-4">
        
        {/* Pernyataan Misi */}
        <h3>
          <strong>Dari Angka ke Aksi: Misi Kami</strong>
        </h3>
        <p>
          Mengetahui angka Body Mass Index (BMI) Anda adalah langkah pertama yang penting.
          Namun, angka saja tidak cukup. Banyak dari kita bertanya, &quot;Lalu, apa selanjutnya?&quot;
          Aplikasi ini lahir untuk menjawab pertanyaan itu. Aplikasi ini menjembatani kesenjangan
          antara data (angka BMI Anda) dan tindakan nyata, dengan menyediakan Artificial Intelegence (AI)
          untuk memberikan saran latihan dan pola makan yang bisa Anda terapkan.
        </p>

        {/* Deskripsi Tumpukan Teknologi */}
        <h3>
          <strong>Tumpukan Teknologi</strong>
        </h3>
        <p>
          Untuk memberikan pengalaman yang cepat, modern, dan andal, aplikasi ini dibangun
          di atas fondasi teknologi terdepan di industri:
        </p>
        <ul>
          <li>
            <strong>Next.js & React:</strong> Untuk antarmuka pengguna berperforma tinggi yang dibangun dengan komponen modern.
          </li>
          <li>
            <strong>TypeScript:</strong> Untuk memastikan kode yang kuat, terukur, dan bebas dari kesalahan umum.
          </li>
          <li>
            <strong>Tailwind CSS:</strong> Untuk styling yang cepat dan konsisten yang menciptakan desain yang bersih.
          </li>
          <li>
            <strong>Replicate API:</strong> Sebagai gerbang yang aman dan terukur untuk mengakses model AI canggih di cloud.
          </li>
        </ul>

        {/* Tautan ke Repositori GitHub */}
        <div className="not-prose mt-6">
          <a
            href="https://github.com/your-username/your-bmi-repo" // GANTI DENGAN URL REPO ANDA
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
          >
            {/* Ikon GitHub */}
            <svg
              className="w-4 h-4"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            Lihat Repositori GitHub
          </a>
        </div>

        {/* Deskripsi Model AI */}
        <h3>
          <strong>Artificial Intelegence(AI): Didukung oleh IBM Granite</strong>
        </h3>
        <p>
          Kecerdasan aplikasi ini berasal dari seri model bahasa
          <strong>Granite dari IBM</strong>. Saya memanfaatkan model Granite Instruct yang kuat
          untuk menganalisis hasil BMI, tinggi, dan berat badan Anda. Berdasarkan data ini, AI
          memberikan saran rencana latihan dan makanan yang benar-benar relevan dan kontekstual.
          Ini bukan sekadar kalkulator; ini adalah penasihat kesehatan cerdas Anda.
        </p>

        {/* Tautan ke Model AI di Replicate */}
        <div className="not-prose mt-6">
          <a
            href="https://replicate.com/ibm-granite/granite-3.3-8b-instruct"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
          >
            {/* Ikon Replicate */}
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
            Lihat Model di Replicate
          </a>
        </div>
      </div>
    </div>
  );
}