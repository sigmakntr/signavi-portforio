import React from "react";
import code from "./constants/code";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/reset.css";
import "./styles/app/style.css";
import "./styles/main/style.css";
import logo from "./images/icon_logo.png";

function App() {
  return (
    <div className="app">
      <div className="background"></div>
      <div className="content">
        <Header/>
        <main>
          <section id="top" className="section-top">
            <h1>KENTARO FUJIMOTO</h1>
            <p>Code. Creativity. Curiosity.
              This is the portfolio site of a software engineer.</p>
          </section>
          <section id="about" className="section-about">
            <h2>About</h2>
            <div className="section-about_contents">
              <div className="section-about_contentsItem">
                <div className="section-about_contentsItemImage"><img src={logo} alt=""/></div>
                <div className="section-about_contentsItemList">
                  <h3>経歴</h3>
                  <ul>
                    <li>2021/4-2021/6：プログラミングスクール TECH I.S.にてプログラミングを学ぶ</li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="section-about_contentsItem">
                <div className="section-about_contentsItemList">
                  <h3>スキル</h3>
                  <ul>
                    <li><strong>TypeScript/PHP</strong><br/><p>- ブラウザやサーバーで動作するプログラミング言語。Webサイトやシステムの動きを作ります。</p></li>
                    <li><strong>Vue.js/Node.js/Laravel</strong><br/><p>- Webアプリの「見た目」や「裏側の処理」を作るための仕組み。使いやすく、素早く動くサイトを作れます。</p></li>
                    <li><strong>React Native</strong><br/><p>- iOSとAndridどちらにも対応したスマホアプリを開発できます。</p></li>
                    <li><strong>MySQL/PostgreSQL/NoSQL/Firebase</strong><br/><p>- お問い合わせ内容や会員情報など、大切なデータを保存・管理できます。</p></li>
                    <li><strong>AWS</strong><br/><p>- Webシステムをクラウド上で安全に運用するための環境を構築できます。</p></li>
                    <li><strong>WordPress</strong><br/><p>- お知らせやブログなどを、コードを書かずに誰でも簡単に更新できるサイトを作れます。</p></li>
                    <li><strong>ヒアリング〜設計・テスト・納品・運用サポート</strong><br/><p>- 要件定義・設計・テスト・納品といった各工程を丁寧に行い、信頼いただけるパートナーとしてお客様に寄り添います。</p></li>
                  </ul>
                </div>
                <div className="section-about_contentsItemImage"><img src={logo} alt=""/></div>
              </div>
            </div>
          </section>

          <section id="works">
            <h2>Works</h2>
            <ul>
              <li>test</li>
              <li>test</li>
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
