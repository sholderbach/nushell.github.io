import{_ as a,r as n,o as r,c as i,a as t,b as l,w as c,e as o,d as e}from"./app.8034769a.js";const u={},h=o(`<h1 id="externs" tabindex="-1"><a class="header-anchor" href="#externs" aria-hidden="true">#</a> Externs</h1><p>Calling external commands is a fundamental part of using Nushell as a shell (and often using Nushell as a language). There&#39;s a problem, though, commands outside of Nushell means that Nushell can&#39;t help with finding errors in the call, or completions, or syntax highlighting.</p><p>This is where <code>extern</code> comes in. The <code>extern</code> keyword allows you to write a full signature for the command that lives outside of Nushell so that you get all the benefits above. If you take a look at the default config, you&#39;ll notice that there are a few extern calls in there. Here&#39;s one of them:</p><div class="language-text ext-text"><pre class="language-text"><code>  export extern &quot;git push&quot; [
    remote?: string@&quot;nu-complete git remotes&quot;, # the name of the remote
    refspec?: string@&quot;nu-complete git branches&quot;# the branch / refspec
    --verbose(-v)                              # be more verbose
    --quiet(-q)                                # be more quiet
    --repo: string                             # repository
    --all                                      # push all refs
    --mirror                                   # mirror all refs
    --delete(-d)                               # delete refs
    --tags                                     # push tags (can&#39;t be used with --all or --mirror)
    --dry-run(-n)                              # dry run
    --porcelain                                # machine-readable output
    --force(-f)                                # force updates
    --force-with-lease: string                 # require old value of ref to be at this value
    --recurse-submodules: string               # control recursive pushing of submodules
    --thin                                     # use thin pack
    --receive-pack: string                     # receive pack program
    --exec: string                             # receive pack program
    --set-upstream(-u)                         # set upstream for git pull/status
    --progress                                 # force progress reporting
    --prune                                    # prune locally removed refs
    --no-verify                                # bypass pre-push hook
    --follow-tags                              # push missing but relevant tags
    --signed: string                           # GPG sign the push
    --atomic                                   # request atomic transaction on remote side
    --push-option(-o): string                  # option to transmit
    --ipv4(-4)                                 # use IPv4 addresses only
    --ipv6(-6)                                 # use IPv6 addresses only
  ]
</code></pre></div><p>You&#39;ll notice this gives you all the same descriptive syntax that internal commands do, letting you describe flags, short flags, positional parameters, types, and more.</p><h2 id="types-and-custom-completions" tabindex="-1"><a class="header-anchor" href="#types-and-custom-completions" aria-hidden="true">#</a> Types and custom completions</h2>`,6),d=e("In the above example, you'll notice some types are followed by "),p=t("code",null,"@",-1),m=e(" followed by the name of a command. We talk more about "),f=e("custom completions"),g=e(" in their own section."),y=o('<p>Both the type (or shape) of the argument and the custom completion tell Nushell about how to complete values for that flag or position. For example, setting a shape to <code>path</code> allows Nushell to complete the value to a filepath for you. Using the <code>@</code> with a custom completion overrides this default behavior, letting the custom completion give you full completion list.</p><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h2><p>There are a few limitations to the current <code>extern</code> syntax. In Nushell, flags and positional arguments are very flexible: flags can precede positional arguments, flags can be mixed into positional arguments, and flags can follow positional arguments. Many external commands are not this flexible. There is not yet a way to require a particular ordering of flags and positional arguments to the style required by the external.</p><p>The second limitation is that some externals require flags to be passed using <code>=</code> to separate the flag and the value. In Nushell, the <code>=</code> is a convenient optional syntax and there&#39;s currently no way to require its use.</p>',4);function x(v,b){const s=n("RouterLink");return r(),i("div",null,[h,t("p",null,[d,p,m,l(s,{to:"/book/custom_completions.html"},{default:c(()=>[f]),_:1}),g]),y])}const w=a(u,[["render",x],["__file","externs.html.vue"]]);export{w as default};
