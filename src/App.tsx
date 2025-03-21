import React from "react";
import code from "./constants/code";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/reset.css";
import "./styles/app/style.css";
import "./styles/main/style.css";

function App() {
    return (
        <div className="app">
            <div className="background"></div>
            <div className="content">
                <Header/>
                <main>
                    <section id="about" className="section-about">
                        <h2>About</h2>
                        <p>こんにちは。私のサイトを覗いてくださりありがとうございます。</p>
                    </section>

                    <section id="works">
                        <h2>Works</h2>
                        <ul>
                            <li>2022-2023：フリーランスとして企業や個人事業主様のコーポレートサイト制作</li>
                            <li>2024-2025：Web開発会社でWebシステム開発やインフラ構築</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                            <li>テスト</li>
                        </ul>
                    </section>

                    <section id="contact">
                        <h2>Contact</h2>
                        <p>お問い合わせは以下のメールまでお願いします。</p>
                        <p><a href={`mailto:${code.mails.contact}`}>{code.mails.contact}</a></p>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
