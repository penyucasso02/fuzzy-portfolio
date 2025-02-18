const App = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      padding: "20px",
      backgroundColor: "#fff",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      backgroundColor: "#0073e6",
      color: "white",
      padding: "20px",
      borderRadius: "10px 10px 0 0",
    },
    title: {
      margin: 0,
      fontSize: "2rem",
    },
    content: {
      padding: "20px",
    },
    introTitle: {
      color: "#333",
    },
    projectsSection: {
      marginTop: "20px",
      textAlign: "left",
    },
    projectCard: {
      backgroundColor: "#f9f9f9",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    },
    projectTitle: {
      margin: "0",
      color: "#0073e6",
    },
    projectDesc: {
      marginTop: "5px",
      color: "#555",
    },
    projectButton: {
      marginTop: "10px",
      padding: "8px 15px",
      backgroundColor: "#0073e6",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
    },
    footer: {
      backgroundColor: "#333",
      color: "white",
      padding: "10px",
      borderRadius: "0 0 10px 10px",
      fontSize: "0.9rem",
      marginTop: "20px",
    },
  };

  // Sample projects data with links
  const projects = [
    { title: "AI Travel Planner", description: "An AI-powered app that helps plan trips efficiently.", link: "https://github.com/yourusername/ai-travel-planner" },
    { title: "E-Commerce Website", description: "A fully responsive online store with payment integration.", link: "https://github.com/yourusername/ecommerce-website" },
    { title: "Portfolio Website", description: "A personal website to showcase my skills and projects.", link: "https://github.com/yourusername/portfolio-website" },
  ];

  // Function to handle project button click
  const openProject = (url) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Fuzzy Portfolio</h1>
        <p>Showcasing creativity, projects, and achievements.</p>
      </header>

      <main style={styles.content}>
        <section>
          <h2 style={styles.introTitle}>Welcome to My Portfolio</h2>
          <p>Explore my latest work and projects in web development, design, and more.</p>
        </section>

        {/* Projects Section */}
        <section style={styles.projectsSection}>
          <h2>My Projects</h2>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.description}</p>
              <button style={styles.projectButton} onClick={() => openProject(project.link)}>
                View Project
              </button>
            </div>
          ))}
        </section>
      </main>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Fuzzy Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
