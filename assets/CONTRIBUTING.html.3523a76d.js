import{_ as l,r as i,o as d,c as a,a as e,b as n,d as o,e as s}from"./app.8034769a.js";const c={},r=e("h1",{id:"contributing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributing","aria-hidden":"true"},"#"),o(" Contributing")],-1),h=o("If you want to contribute to nushell itself, see "),u={href:"https://github.com/nushell/nushell/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},_=o("nushell/nushell/CONTRIBUTING.md"),m=o(" and the "),f={href:"https://www.nushell.sh/contributor-book/",target:"_blank",rel:"noopener noreferrer"},g=o("contributor-book"),p=o("."),b=e("p",null,"This website is based on Vuepress.",-1),y=e("h2",{id:"running-vuepress-locally",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running-vuepress-locally","aria-hidden":"true"},"#"),o(" Running Vuepress locally")],-1),k={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},N=o("Install Node.js"),v=e("li",null,[o("Run "),e("code",null,"npm install")],-1),I=e("li",null,[o("Run "),e("code",null,"npm run dev")],-1),w=e("p",null,[o("If you're adding a new page to the book, to make it appear, put it also to "),e("code",null,".vuepress/config.js"),o(".")],-1),T=e("h2",{id:"translation-guide",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#translation-guide","aria-hidden":"true"},"#"),o(" Translation Guide")],-1),C=s("<li>First of all, make sure you have installed <code>node.js</code>, <code>yarn</code>, and then clone the doc repo locally: <code>git clone git@github.com:nushell/nushell.github.io.git nu-docs</code>;</li><li>Run <code>yarn install</code> in <code>nu-docs</code> dir after your cloning;</li><li>Add a book dir(if not exists) for the specified locale in the docs&#39; root folder, say <code>zh-CN</code>, and then create a <code>book</code> child folder for all your translated documents, and a README.md for the home page of your locale;</li>",3),R=o("Modify the vuepress config file "),x=e("code",null,"nu-docs/.vuepress/config.js",-1),j=o(", add "),B=e("code",null,"zh-CN",-1),E=o(" related configs, here is a "),O={href:"https://github.com/nushell/nushell.github.io/commit/46d1672",target:"_blank",rel:"noopener noreferrer"},V=o("commit"),G=o(" for reference;"),U=s("<li>Add README.md in the <code>book</code> dir, and that will be the default introduction page of Nushell. Note: Please <strong>DO NOT</strong> translate the file name of the docs.</li><li>Run <code>yarn vuepress dev</code>, then open <strong>http://localhost:8080/</strong> in your browser, switch to the language you are going to translate into, and you will see the introduction page you have just created. You can translate the docs and save them to get a preview in the browser;</li><li>Update the <code>nu-docs/i18n-meta.json</code> file, fill the locale value of the doc you have just finished. It&#39;s recommended to use <code>commit_id@author</code> or simply a <code>commit_id</code> to indicate your translation end to the specified commit;</li><li>Commit your changes, It&#39;s recommended to squash all your commits in one commit with a commit message like this: <code>Translate your_doc_file.md to zh-CN from commit: f3dc86d3d</code>;</li><li>Send a Pull Request;</li><li>Check outdated translations: You can use a command like <code>nu ./i18n.nu outdated zh-CN</code> to check the outdated translations(documents have been changed after your last translation) for the specified locale.</li>",6);function z(A,D){const t=i("ExternalLinkIcon");return d(),a("div",null,[r,e("p",null,[h,e("a",u,[_,n(t)]),m,e("a",f,[g,n(t)]),p]),b,y,e("ol",null,[e("li",null,[e("a",k,[N,n(t)])]),v,I]),w,T,e("ol",null,[C,e("li",null,[R,x,j,B,E,e("a",O,[V,n(t)]),G]),U])])}const q=l(c,[["render",z],["__file","CONTRIBUTING.html.vue"]]);export{q as default};
