import{_ as c,M as r,p as d,q as l,Q as t,t as e,N as o,U as a,a1 as i}from"./framework-344bb0e4.js";const h={},u=t("h1",{id:"hooks",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#hooks","aria-hidden":"true"},"#"),e(" Hooks")],-1),p={href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"nu script.nu",-1),f=t("code",null,'nu -c "print foo"',-1),v=i('<p>Currently, we support these types of hooks:</p><ul><li><code>pre_prompt</code> : Triggered before the prompt is drawn</li><li><code>pre_execution</code> : Triggered before the line input starts executing</li><li><code>env_change</code> : Triggered when an environment variable changes</li><li><code>display_output</code> : A block that the output is passed to (experimental).</li></ul><p>To make it clearer, we can break down Nushell&#39;s execution cycle. The steps to evaluate one line in the REPL mode are as follows:</p><ol><li>Check for <code>pre_prompt</code> hooks and run them</li><li>Check for <code>env_change</code> hooks and run them</li><li>Display prompt and wait for user input</li><li>After user typed something and pressed &quot;Enter&quot;: Check for <code>pre_execution</code> hooks and run them</li><li>Parse and evaluate user input</li><li>If <code>display_output</code> is defined, use it to print command output</li><li>Return to 1.</li></ol><h2 id="basic-hooks" tabindex="-1"><a class="header-anchor" href="#basic-hooks" aria-hidden="true">#</a> Basic Hooks</h2>',5),m=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = {
    # ...other config...

    hooks: {
        pre_prompt: { print &quot;pre prompt hook&quot; }
        pre_execution: { print &quot;pre exec hook&quot; }
        env_change: {
            PWD: {|before, after| print $&quot;changing directory from ($before) to ($after)&quot; }
        }
    }
}
</code></pre></div><p>Try putting the above to your config, running Nushell and moving around your filesystem. When you change a directory, the <code>PWD</code> environment variable changes and the change triggers the hook with the previous and the current values stored in <code>before</code> and <code>after</code> variables, respectively.</p><p>Instead of defining just a single hook per trigger, it is possible to define a <strong>list of hooks</strong> which will run in sequence:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = {
    ...other config...

    hooks: {
        pre_prompt: [
            { print &quot;pre prompt hook&quot; }
            { print &quot;pre prompt hook2&quot; }
        ]
        pre_execution: [
            { print &quot;pre exec hook&quot; }
            { print &quot;pre exec hook2&quot; }
        ]
        env_change: {
            PWD: [
                {|before, after| print $&quot;changing directory from ($before) to ($after)&quot; }
                {|before, after| print $&quot;changing directory from ($before) to ($after) 2&quot; }
            ]
        }
    }
}
</code></pre></div><p>Also, it might be more practical to update the existing config with new hooks, instead of defining the whole config from scratch:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    pre_prompt: ...
    pre_execution: ...
    env_change: {
        PWD: ...
    }
})
</code></pre></div><h2 id="changing-environment" tabindex="-1"><a class="header-anchor" href="#changing-environment" aria-hidden="true">#</a> Changing Environment</h2>`,7),k=t("strong",null,"block",-1),x=t("code",null,"def-env",-1),b=i(`<div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let-env config = ($env.config | upsert hooks {
    pre_prompt: { let-env SPAM = &quot;eggs&quot; }
})

&gt; $env.SPAM
eggs
</code></pre></div><p>The hook blocks otherwise follow the general scoping rules, i.e., commands, aliases, etc. defined within the block will be thrown away once the block ends.</p><h2 id="conditional-hooks" tabindex="-1"><a class="header-anchor" href="#conditional-hooks" aria-hidden="true">#</a> Conditional Hooks</h2><p>One thing you might be tempted to do is to activate an environment whenever you enter a directory:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    env_change: {
        PWD: [
            {|before, after|
                if $after == /some/path/to/directory {
                    load-env { SPAM: eggs }
                }
            }
        ]
    }
})
</code></pre></div>`,5),_=t("code",null,"if",-1),y=t("code",null,"load-env (if $after == ... { ... } else { {} })",-1),w=i(`<p>To deal with the above problem, we introduce another way to define a hook -- <strong>a record</strong>:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    env_change: {
        PWD: [
            {
                condition: {|before, after| $after == /some/path/to/directory }
                code: {|before, after| load-env { SPAM: eggs } }
            }
        ]
    }
})
</code></pre></div><p>When the hook triggers, it evaluates the <code>condition</code> block. If it returns <code>true</code>, the <code>code</code> block will be evaluated. If it returns <code>false</code>, nothing will happen. If it returns something else, an error will be thrown. The <code>condition</code> field can also be omitted altogether in which case the hook will always evaluate.</p><p>The <code>pre_prompt</code> and <code>pre_execution</code> hook types also support the conditional hooks but they don&#39;t accept the <code>before</code> and <code>after</code> parameters.</p><h2 id="hooks-as-strings" tabindex="-1"><a class="header-anchor" href="#hooks-as-strings" aria-hidden="true">#</a> Hooks as Strings</h2><p>So far a hook was defined as a block that preserves only the environment, but nothing else. To be able to define commands or aliases, it is possible to define the <code>code</code> field as <strong>a string</strong>. You can think of it as if you typed the string into the REPL and hit Enter. So, the hook from the previous section can be also written as</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let-env config = ($env.config | upsert hooks {
    pre_prompt: &#39;let-env SPAM = &quot;eggs&quot;&#39;
})

&gt; $env.SPAM
eggs
</code></pre></div><p>This feature can be used, for example, to conditionally bring in definitions based on the current directory:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    env_change: {
        PWD: [
            {
                condition: {|_, after| $after == /some/path/to/directory }
                code: &#39;def foo [] { print &quot;foo&quot; }&#39;
            }
            {
                condition: {|before, _| $before == /some/path/to/directory }
                code: &#39;hide foo&#39;
            }
        ]
    }
})
</code></pre></div><p>When defining a hook as a string, the <code>$before</code> and <code>$after</code> variables are set to the previous and current environment variable value, respectively, similarly to the previous examples:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    env_change: {
        PWD: {
            code: &#39;print $&quot;changing directory from ($before) to ($after)&quot;&#39;
        }
    }
}
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><h3 id="adding-a-single-hook-to-existing-config" tabindex="-1"><a class="header-anchor" href="#adding-a-single-hook-to-existing-config" aria-hidden="true">#</a> Adding a single hook to existing config</h3><p>An example for PWD env change hook:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks.env_change.PWD {|config|
    let val = ($config | get -i hooks.env_change.PWD)

    if $val == $nothing {
        $val | append {|before, after| print $&quot;changing directory from ($before) to ($after)&quot; }
    } else {
        [
            {|before, after| print $&quot;changing directory from ($before) to ($after)&quot; }
        ]
    }
})
</code></pre></div><h3 id="automatically-activating-an-environment-when-entering-a-directory" tabindex="-1"><a class="header-anchor" href="#automatically-activating-an-environment-when-entering-a-directory" aria-hidden="true">#</a> Automatically activating an environment when entering a directory</h3><p>This one looks for <code>test-env.nu</code> in a directory</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks.env_change.PWD {
    [
        {
            condition: {|_, after|
                ($after == &#39;/path/to/target/dir&#39;
                    and ($after | path join test-env.nu | path exists))
            }
            code: &quot;overlay use test-env.nu&quot;
        }
        {
            condition: {|before, after|
                (&#39;/path/to/target/dir&#39; not-in $after
                    and &#39;/path/to/target/dir&#39; in $before
                    and &#39;test-env&#39; in (overlay list))
            }
            code: &quot;overlay hide test-env --keep-env [ PWD ]&quot;
        }
    ]
})
</code></pre></div><h3 id="filtering-or-diverting-command-output" tabindex="-1"><a class="header-anchor" href="#filtering-or-diverting-command-output" aria-hidden="true">#</a> Filtering or diverting command output</h3><p>You can use the <code>display_output</code> hook to redirect the output of commands. You should define a block that works on all value types. The output of external commands is not filtered through <code>display_output</code>.</p><p>This hook can display the output in a separate window, perhaps as rich HTML text. Here is the basic idea of how to do that:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env config = ($env.config | upsert hooks {
    display_output: { to html --partial --no-color | save --raw /tmp/nu-output.html }
})
</code></pre></div>`,22),$=t("code",null,"file:///tmp/nu-output.html",-1),q=t("code",null,"save",-1);function P(T,W){const s=r("ExternalLinkIcon"),n=r("RouterLink");return d(),l("div",null,[u,t("p",null,[e("Hooks allow you to run a code snippet at some predefined situations. They are only available in the interactive mode ("),t("a",p,[e("REPL"),o(s)]),e("), they do not work if you run a Nushell with a script ("),g,e(") or commands ("),f,e(") arguments.")]),v,t("p",null,[e("To enable hooks, define them in your "),o(n,{to:"/book/configuration.html"},{default:a(()=>[e("config")]),_:1}),e(":")]),m,t("p",null,[e("One feature of the hooks is that they preserve the environment. Environment variables defined inside the hook "),k,e(" will be preserved in a similar way as "),o(n,{to:"/book/environment.html#defining-environment-from-custom-commands"},{default:a(()=>[x]),_:1}),e(". You can test it with the following example:")]),b,t("p",null,[e("This won't work because the environment will be active only within the "),o(n,{to:"/commands/docs/if.html"},{default:a(()=>[_]),_:1}),e(" block. In this case, you could easily rewrite it as "),y,e(" but this pattern is fairly common and later we'll see that not all cases can be rewritten like this.")]),w,t("p",null,[e("You can view the result by opening "),$,e(" in a web browser. Of course this isn't very convenient unless you use a browser that automatically reloads when the file changes. Instead of the "),o(n,{to:"/commands/docs/save.html"},{default:a(()=>[q]),_:1}),e(" command, you would normally customize this to send the HTML output to a desired window.")])])}const E=c(h,[["render",P],["__file","hooks.html.vue"]]);export{E as default};
