import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="background"></div>
            <div className="content">
                <header className="header">
                    <h1>Kentaro Fujimoto Portfolio</h1>
                </header>
                <main>
                    <section id="about">
                        <h2>About</h2>
                        <p>こんにちは。私のサイトを覗いてくださりありがとうございます。</p>
                    </section>

                    <section id="works">
                        <h2>Works</h2>
                        <ul>
                            <li>フリーランスとして企業や個人事業主様のコーポレートサイトを制作</li>
                            <li>Web開発企業でWebシステム開発（顧客管理システム、物件サイト）</li>
                        </ul>
                    </section>

                    <section id="contact">
                        <h2>Contact</h2>
                        <p>お問い合わせは以下のメールまでお願いします。</p>
                        <p><a href="mailto:your-email@example.com">your-email@example.com</a></p>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2025 Kentaro Fujimoto</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
