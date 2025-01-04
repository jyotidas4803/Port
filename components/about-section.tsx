export function AboutSection() {
  return (
    <section id="about" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-600 dark:text-purple-400 relative">
        <span className="relative z-10">About Me</span>
        <span className="absolute inset-0 transform translate-x-1 translate-y-1 text-pink-300 dark:text-pink-600 -z-10">About Me</span>
      </h2>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-muted-foreground">
          I am a passionate web developer with experience in building modern web applications. 
          I specialize in React, Next.js, and TypeScript, and I love creating beautiful and 
          functional user interfaces. As a fresher in the industry, I bring fresh perspectives 
          and a strong desire to learn and grow.
        </p>
      </div>
    </section>
  )
}

