import{_ as o,p as s,q as c,Q as e,t as r,v as t,a1 as d}from"./framework-344bb0e4.js";const h={},i={id:"frontmatter-title-for-system",tabindex:"-1"},n=e("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),l={class:"command-title"},u=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; registry query (key) (value) --hkcr --hkcu --hklm --hku --hkpd --hkpt --hkpnls --hkcc --hkdd --hkculs</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>key</code>: registry key to query</li><li><code>value</code>: optionally supply a registry value to query</li><li><code>--hkcr</code> <code>(-)</code>: query the hkey_classes_root hive</li><li><code>--hkcu</code> <code>(-)</code>: query the hkey_current_user hive</li><li><code>--hklm</code> <code>(-)</code>: query the hkey_local_machine hive</li><li><code>--hku</code> <code>(-)</code>: query the hkey_users hive</li><li><code>--hkpd</code> <code>(-)</code>: query the hkey_performance_data hive</li><li><code>--hkpt</code> <code>(-)</code>: query the hkey_performance_text hive</li><li><code>--hkpnls</code> <code>(-)</code>: query the hkey_performance_nls_text hive</li><li><code>--hkcc</code> <code>(-)</code>: query the hkey_current_config hive</li><li><code>--hkdd</code> <code>(-)</code>: query the hkey_dyn_data hive</li><li><code>--hkculs</code> <code>(-)</code>: query the hkey_current_user_local_settings hive</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Currently supported only on Windows systems.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Query the HKEY_CURRENT_USER hive</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> registry query <span class="token parameter variable">--hkcu</span> environment
</code></pre></div><p>Query the HKEY_LOCAL_MACHINE hive</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> registry query <span class="token parameter variable">--hklm</span> <span class="token string">&#39;SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Environment&#39;</span>
</code></pre></div>`,11);function p(a,y){return s(),c("div",null,[e("h1",i,[n,r(),e("code",null,t(a.$frontmatter.title),1),r(" for system")]),e("div",l,t(a.$frontmatter.system),1),u])}const k=o(h,[["render",p],["__file","registry_query.html.vue"]]);export{k as default};
