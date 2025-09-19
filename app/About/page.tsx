export default function AboutPage() {
  return (
    // Wrapper div to center the card on the page
    <div className="flex justify-center p-4">
      
      {/* --- MAIN CARD STARTS HERE --- */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl space-y-8">
        
        {/* Header Section: App name and tagline */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800">About Smart BMI Advisor</h1>
          <p className="mt-2 text-lg text-slate-600">
            Your personal guide to a healthier lifestyle.
          </p>
        </div>

        {/* Main content section with Tailwind's prose classes for styling */}
        <div className="prose prose-slate max-w-none space-y-4">
          
          {/* Mission Statement */}
          <h3>
            <strong>From Numbers to Action: Our Mission</strong>
          </h3>
          <p>
            Knowing your Body Mass Index (BMI) is a crucial first step.
            However, a number by itself isn&apos;t enough. Many of us are left asking, &quot;So, what&apos;s next?&quot;
            This application was created to answer that very question. My mission is to bridge the gap
            between data (your BMI score) and meaningful action, by providing an intelligent tool
            that offers personalized and actionable workout and diet suggestions.
          </p>

          {/* Technology Stack Description */}
          <h3>
            <strong>The Technology Stack</strong>
          </h3>
          <p>
            To deliver a fast, modern, and reliable experience, this application is built
            on a foundation of industry-leading technologies:
          </p>
          <ul>
            <li>
              <strong>Next.js & React:</strong> For a high-performance user interface built with modern components.
            </li>
            <li>
              <strong>TypeScript:</strong> To ensure robust, scalable, and error-free code.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> For rapid and consistent styling that creates a clean design.
            </li>
            <li>
              <strong>Replicate API:</strong> As a secure and scalable gateway to access advanced AI models in the cloud.
            </li>
          </ul>

          {/* Link to the GitHub Repository */}
          <div className="not-prose mt-6">
            <a
              href="https://github.com/RadityaNalendraU/bmi_mass_calculator_integrated_with_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            >
              {/* GitHub Icon */}
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
              View on GitHub
            </a>
          </div>

          {/* AI Model Description */}
          <h3>
            <strong>The Core Intelligence: Powered by IBM Granite</strong>
          </h3>
          <p>
            The intelligence at the heart of this application comes from
            <strong>IBM&apos;s Granite</strong> series of language models. We leverage a
            powerful Granite Instruct model to analyze your BMI results, height, and weight. Based
            on this data, the AI provides workout and meal plan suggestions that
            are genuinely relevant and contextual. This isn&apos;t just a calculator;
            it&apos;s your smart health advisor.
          </p>

          {/* Link to the AI model on Replicate */}
          <div className="not-prose mt-6">
            <a
              href="https://replicate.com/ibm-granite/granite-3.3-8b-instruct"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors"
            >
              {/* Replicate Icon */}
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
              View Model on Replicate
            </a>
          </div>
        </div>
      </div>
      {/* --- MAIN CARD ENDS HERE --- */}

    </div>
  );
}
