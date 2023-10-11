function MyButton() {
    return(
        <button>
            I am a Button
        </button>
    )
}

export default function MyApp()  {
    return(
        <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
    </div>
    )
}

function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
  }