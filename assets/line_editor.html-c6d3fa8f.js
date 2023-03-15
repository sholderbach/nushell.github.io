import{_ as c,M as i,p as l,q as d,Q as n,t as e,N as t,U as s,a1 as o}from"./framework-344bb0e4.js";const r={},u=n("h1",{id:"reedline-nu-s-line-editor",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reedline-nu-s-line-editor","aria-hidden":"true"},"#"),e(" Reedline, Nu's line editor")],-1),h={href:"https://github.com/nushell/reedline",target:"_blank",rel:"noopener noreferrer"},m=o(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="editing-mode" tabindex="-1"><a class="header-anchor" href="#editing-mode" aria-hidden="true">#</a> Editing mode</h3><p>Reedline allows you to edit text using two modes: vi and emacs. If not specified, the default edit mode is emacs mode. In order to select your favorite you need to modify your config file and write down your preferred mode.</p><p>For example:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    edit_mode: emacs
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h4 id="default-keybindings" tabindex="-1"><a class="header-anchor" href="#default-keybindings" aria-hidden="true">#</a> Default keybindings</h4><p>Each edit mode comes with the usual keybinding for vi and emacs text editing.</p><p>Emacs and Vi Insert keybindings</p><table><thead><tr><th>Key</th><th>Event</th></tr></thead><tbody><tr><td>Esc</td><td>Esc</td></tr><tr><td>Backspace</td><td>Backspace</td></tr><tr><td>End</td><td>Move to end of line</td></tr><tr><td>End</td><td>Complete history hint</td></tr><tr><td>Home</td><td>Move to line start</td></tr><tr><td>Ctr + c</td><td>Cancel current line</td></tr><tr><td>Ctr + l</td><td>Clear screen</td></tr><tr><td>Ctr + r</td><td>Search history</td></tr><tr><td>Ctr + Right</td><td>Complete history word</td></tr><tr><td>Ctr + Right</td><td>Move word right</td></tr><tr><td>Ctr + Left</td><td>Move word left</td></tr><tr><td>Up</td><td>Move menu up</td></tr><tr><td>Up</td><td>Move up</td></tr><tr><td>Down</td><td>Move menu down</td></tr><tr><td>Down</td><td>Move down</td></tr><tr><td>Left</td><td>Move menu left</td></tr><tr><td>Left</td><td>Move left</td></tr><tr><td>Right</td><td>History hint complete</td></tr><tr><td>Right</td><td>Move menu right</td></tr><tr><td>Right</td><td>Move right</td></tr><tr><td>Ctr + b</td><td>Move menu left</td></tr><tr><td>Ctr + b</td><td>Move left</td></tr><tr><td>Ctr + f</td><td>History hint complete</td></tr><tr><td>Ctr + f</td><td>Move menu right</td></tr><tr><td>Ctr + f</td><td>Move right</td></tr><tr><td>Ctr + p</td><td>Move menu up</td></tr><tr><td>Ctr + p</td><td>Move up</td></tr><tr><td>Ctr + n</td><td>Move menu down</td></tr><tr><td>Ctr + n</td><td>Move down</td></tr></tbody></table><p>Vi Normal keybindings</p><table><thead><tr><th>Key</th><th>Event</th></tr></thead><tbody><tr><td>Ctr + c</td><td>Cancel current line</td></tr><tr><td>Ctr + l</td><td>Clear screen</td></tr><tr><td>Up</td><td>Move menu up</td></tr><tr><td>Up</td><td>Move up</td></tr><tr><td>Down</td><td>Move menu down</td></tr><tr><td>Down</td><td>Move down</td></tr><tr><td>Left</td><td>Move menu left</td></tr><tr><td>Left</td><td>Move left</td></tr><tr><td>Right</td><td>Move menu right</td></tr><tr><td>Right</td><td>Move right</td></tr></tbody></table><p>Besides the previous keybindings, while in Vi normal mode you can use the classic vi mode of executing actions by selecting a motion or an action. The available options for the combinations are:</p><p>Vi Normal motions</p><table><thead><tr><th>Key</th><th>motion</th></tr></thead><tbody><tr><td>w</td><td>Word</td></tr><tr><td>d</td><td>Line end</td></tr><tr><td>0</td><td>Line start</td></tr><tr><td>$</td><td>Line end</td></tr><tr><td>f</td><td>Right until char</td></tr><tr><td>t</td><td>Right before char</td></tr><tr><td>F</td><td>Left until char</td></tr><tr><td>T</td><td>Left before char</td></tr></tbody></table><p>Vi Normal actions</p><table><thead><tr><th>Key</th><th>action</th></tr></thead><tbody><tr><td>d</td><td>Delete</td></tr><tr><td>p</td><td>Paste after</td></tr><tr><td>P</td><td>Paste before</td></tr><tr><td>h</td><td>Move left</td></tr><tr><td>l</td><td>Move right</td></tr><tr><td>j</td><td>Move down</td></tr><tr><td>k</td><td>Move up</td></tr><tr><td>w</td><td>Move word right</td></tr><tr><td>b</td><td>Move word left</td></tr><tr><td>i</td><td>Enter Vi insert at current char</td></tr><tr><td>a</td><td>Enter Vi insert after char</td></tr><tr><td>0</td><td>Move to start of line</td></tr><tr><td>^</td><td>Move to start of line</td></tr><tr><td>$</td><td>Move to end of line</td></tr><tr><td>u</td><td>Undo</td></tr><tr><td>c</td><td>Change</td></tr><tr><td>x</td><td>Delete char</td></tr><tr><td>s</td><td>History search</td></tr><tr><td>D</td><td>Delete to end</td></tr><tr><td>A</td><td>Append to end</td></tr></tbody></table><h3 id="command-history" tabindex="-1"><a class="header-anchor" href="#command-history" aria-hidden="true">#</a> Command history</h3><p>As mentioned before, Reedline manages and stores all the commands that are edited and sent to Nushell. To configure the max number of records that Reedline should store you will need to adjust this value in your config file:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.
    max_history_size: <span class="token number">1000</span>
    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="customizing-your-prompt" tabindex="-1"><a class="header-anchor" href="#customizing-your-prompt" aria-hidden="true">#</a> Customizing your prompt</h3><p>Reedline prompt is also highly customizable. In order to construct your perfect prompt, you could define the next environment variables in your config file:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Use nushell functions to define your right and left prompt</span>
def create_left_prompt <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> path_segment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token variable">$env</span><span class="token builtin class-name">.</span><span class="token environment constant">PWD</span><span class="token punctuation">)</span>

    <span class="token variable">$path_segment</span>
<span class="token punctuation">}</span>

def create_right_prompt <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">let</span> time_segment <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token punctuation">(</span>date now <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%m/%d/%Y %r&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span> <span class="token operator">|</span> str <span class="token function">join</span><span class="token punctuation">)</span>

    <span class="token variable">$time_segment</span>
<span class="token punctuation">}</span>

let-env PROMPT_COMMAND <span class="token operator">=</span> <span class="token punctuation">{</span> create_left_prompt <span class="token punctuation">}</span>
let-env PROMPT_COMMAND_RIGHT <span class="token operator">=</span> <span class="token punctuation">{</span> create_right_prompt <span class="token punctuation">}</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You don&#39;t have to define the environment variables using Nushell functions. You can use simple strings to define them.</p></div><p>You can also customize the prompt indicator for the line editor by modifying the next env variables.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>let-env PROMPT_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;〉&quot;</span>
let-env PROMPT_INDICATOR_VI_INSERT <span class="token operator">=</span> <span class="token string">&quot;: &quot;</span>
let-env PROMPT_INDICATOR_VI_NORMAL <span class="token operator">=</span> <span class="token string">&quot;〉&quot;</span>
let-env PROMPT_MULTILINE_INDICATOR <span class="token operator">=</span> <span class="token string">&quot;::: &quot;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The prompt indicators are environment variables that represent the state of the prompt</p></div><h2 id="keybindings" tabindex="-1"><a class="header-anchor" href="#keybindings" aria-hidden="true">#</a> Keybindings</h2><p>Reedline keybindings are powerful constructs that let you build chains of events that can be triggered with a specific combination of keys.</p><p>For example, let&#39;s say that you would like to map the completion menu to the <code>Ctrl + t</code> keybinding (default is <code>tab</code>). You can add the next entry to your config file.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>After loading this new <code>config.nu</code>, your new keybinding (<code>Ctrl + t</code>) will open the completion command.</p><p>Each keybinding requires the next elements:</p><ul><li>name: Unique name for your keybinding for easy reference in <code>$config.keybindings</code></li><li>modifier: A key modifier for the keybinding. The options are: <ul><li>none</li><li>control</li><li>alt</li><li>shift</li><li>control | alt</li><li>control | alt | shift</li></ul></li><li>keycode: This represent the key to be pressed</li><li>mode: emacs, vi_insert, vi_normal (a single string or a list. e.g. [<code>vi_insert</code> <code>vi_normal</code>])</li><li>event: The type of event that is going to be sent by the keybinding. The options are: <ul><li>send</li><li>edit</li><li>until</li></ul></li></ul>`,33),k={class:"custom-container tip"},g=n("p",{class:"custom-container-title"},"TIP",-1),y=n("code",null,"keybindings list",-1),f=o(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The keybindings added to <code>vi_insert</code> mode will be available when the line editor is in insert mode (when you can write text), and the keybindings marked with <code>vi_normal</code> mode will be available when in normal (when the cursor moves using h, j, k or l)</p></div><p>The event section of the keybinding entry is where the actions to be performed are defined. In this field you can use either a record or a list of records. Something like this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">..</span>.
  event: <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
  <span class="token punctuation">..</span>.
</code></pre></div><p>or</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token punctuation">..</span>.
  event: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> edit: Clear <span class="token punctuation">}</span>
    <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
  <span class="token punctuation">..</span>.
</code></pre></div><p>The first keybinding example shown in this page follows the first case; a single event is sent to the engine.</p><p>The next keybinding is an example of a series of events sent to the engine. It first clears the prompt, inserts a string and then enters that value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name: change_dir_with_fzf
      modifier: CONTROL
      keycode: Char_t
      mode: emacs
      event:<span class="token punctuation">[</span>
          <span class="token punctuation">{</span> edit: Clear <span class="token punctuation">}</span>
          <span class="token punctuation">{</span> edit: InsertString,
            value: <span class="token string">&quot;cd (ls | where type == dir | each { |it| <span class="token variable">$it</span>.name} | str join (char nl) | fzf | decode utf-8 | str trim)&quot;</span>

          <span class="token punctuation">}</span>
          <span class="token punctuation">{</span> send: Enter <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>One disadvantage of the previous keybinding is the fact that the inserted text will be processed by the validator and saved in the history, making the keybinding a bit slow and populating the command history with the same command. For that reason there is the <code>executehostcommand</code> type of event. The next example does the same as the previous one in a simpler way, sending a single event to the engine</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      name: change_dir_with_fzf
      modifier: CONTROL
      keycode: Char_y
      mode: emacs
      event: <span class="token punctuation">{</span>
        send: executehostcommand,
        cmd: <span class="token string">&quot;cd (ls | where type == dir | each { |it| <span class="token variable">$it</span>.name} | str join (char nl) | fzf | decode utf-8 | str trim)&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>Before we continue you must have noticed that the syntax changes for edits and sends, and for that reason it is important to explain them a bit more. A <code>send</code> is all the <code>Reedline</code> events that can be processed by the engine and an <code>edit</code> are all the <code>EditCommands</code> that can be processed by the engine.</p><h3 id="send-type" tabindex="-1"><a class="header-anchor" href="#send-type" aria-hidden="true">#</a> Send type</h3><p>To find all the available options for <code>send</code> you can use</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keybindings list <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> events
</code></pre></div><p>And the syntax for <code>send</code> events is the next one</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span> send: <span class="token operator">&lt;</span>NAME OF EVENT FROM LIST<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can write the name of the events with capital letters. The keybinding parser is case insensitive</p></div><p>There are two exceptions to this rule: the <code>Menu</code> and <code>ExecuteHostCommand</code>. Those two events require an extra field to be complete. The <code>Menu</code> needs the name of the menu to be activated (completion_menu or history_menu)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        send: menu
        name: completion_menu
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>and the <code>ExecuteHostCommand</code> requires a valid command that will be sent to the engine</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        send: executehostcommand
        cmd: <span class="token string">&quot;cd ~&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>It is worth mentioning that in the events list you will also see <code>Edit([])</code>, <code>Multiple([])</code> and <code>UntilFound([])</code>. These options are not available for the parser since they are constructed based on the keybinding definition. For example, a <code>Multiple([])</code> event is built for you when defining a list of records in the keybinding&#39;s event. An <code>Edit([])</code> event is the same as the <code>edit</code> type that was mentioned. And the <code>UntilFound([])</code> event is the same as the <code>until</code> type mentioned before.</p><h3 id="edit-type" tabindex="-1"><a class="header-anchor" href="#edit-type" aria-hidden="true">#</a> Edit type</h3><p>The <code>edit</code> type is the simplification of the <code>Edit([])</code> event. The <code>event</code> type simplifies defining complex editing events for the keybindings. To list the available options you can use the next command</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>keybindings list <span class="token operator">|</span> where <span class="token builtin class-name">type</span> <span class="token operator">==</span> edits
</code></pre></div><p>The usual syntax for an <code>edit</code> is the next one</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span> edit: <span class="token operator">&lt;</span>NAME OF EDIT FROM LIST<span class="token operator">&gt;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>The syntax for the edits in the list that have a <code>()</code> changes a little bit. Since those edits require an extra value to be fully defined. For example, if we would like to insert a string where the prompt is located, then you will have to use</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        edit: insertstring
        value: <span class="token string">&quot;MY NEW STRING&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>or say you want to move right until the first <code>S</code></p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>    <span class="token punctuation">..</span>.
      event: <span class="token punctuation">{</span>
        edit: moverightuntil
        value: <span class="token string">&quot;S&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>As you can see, these two types will allow you to construct any type of keybinding that you require</p><h3 id="until-type" tabindex="-1"><a class="header-anchor" href="#until-type" aria-hidden="true">#</a> Until type</h3><p>To complete this keybinding tour we need to discuss the <code>until</code> type for event. As you have seen so far, you can send a single event or a list of events. And as we have seen, when a list of events is sent, each and every one of them is processed.</p><p>However, there may be cases when you want to assign different events to the same keybinding. This is especially useful with Nushell menus. For example, say you still want to activate your completion menu with <code>Ctrl + t</code> but you also want to move to the next element in the menu once it is activated using the same keybinding.</p><p>For these cases, we have the <code>until</code> keyword. The events listed inside the until event will be processed one by one with the difference that as soon as one is successful, the event processing is stopped.</p><p>The next keybinding represents this case.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menunext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><p>The previous keybinding will first try to open a completion menu. If the menu is not active, it will activate it and send a success signal. If the keybinding is pressed again, since there is an active menu, then the next event it will send is MenuNext, which means that it will move the selector to the next element in the menu.</p><p>As you can see the <code>until</code> keyword allows us to define two events for the same keybinding. At the moment of this writing, only the Menu events allow this type of layering. The other non menu event types will always return a success value, meaning that the <code>until</code> event will stop as soon as it reaches the command.</p><p>For example, the next keybinding will always send a <code>down</code> because that event is always successful</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: emacs
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: down <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menunext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div><h3 id="removing-a-default-keybinding" tabindex="-1"><a class="header-anchor" href="#removing-a-default-keybinding" aria-hidden="true">#</a> Removing a default keybinding</h3><p>If you want to remove a certain default keybinding without replacing it with a different action, you can set <code>event: null</code>.</p><p>e.g. to disable screen clearing with <code>Ctrl + l</code> for all edit modes</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        modifier: control
        keycode: char_l
        mode: <span class="token punctuation">[</span>emacs, vi_normal, vi_insert<span class="token punctuation">]</span>
        event: null
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>

</code></pre></div><h3 id="troubleshooting-keybinding-problems" tabindex="-1"><a class="header-anchor" href="#troubleshooting-keybinding-problems" aria-hidden="true">#</a> Troubleshooting keybinding problems</h3>`,47),b=n("code",null,"keybindings listen",-1),v=o(`<h2 id="menus" tabindex="-1"><a class="header-anchor" href="#menus" aria-hidden="true">#</a> Menus</h2><p>Thanks to Reedline, Nushell has menus that can help you with your day to day shell scripting. Next we present the default menus that are always available when using Nushell</p><h3 id="help-menu" tabindex="-1"><a class="header-anchor" href="#help-menu" aria-hidden="true">#</a> Help menu</h3><p>The help menu is there to ease your transition into Nushell. Say you are putting together an amazing pipeline and then you forgot the internal command that would reverse a string for you. Instead of deleting your pipe, you can activate the help menu with <code>ctr+q</code>. Once active just type keywords for the command you are looking for and the menu will show you commands that match your input. The matching is done on the name of the commands or the commands description.</p><p>To navigate the menu you can select the next element by using <code>tab</code>, you can scroll the description by pressing left or right and you can even paste into the line the available command examples.</p><p>The help menu can be configured by modifying the next parameters</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: help_menu
        only_buffer_difference: <span class="token boolean">true</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;? &quot;</span>                 <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: description      <span class="token comment"># Type of menu</span>
            columns: <span class="token number">4</span>               <span class="token comment"># Number of columns where the options are displayed</span>
            col_width: <span class="token number">20</span>            <span class="token comment"># Optional value. If missing all the screen width is used to calculate column width</span>
            col_padding: <span class="token number">2</span>           <span class="token comment"># Padding between columns</span>
            selection_rows: <span class="token number">4</span>        <span class="token comment"># Number of rows allowed to display found options</span>
            description_rows: <span class="token number">10</span>     <span class="token comment"># Number of rows allowed to display command description</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><h3 id="completion-menu" tabindex="-1"><a class="header-anchor" href="#completion-menu" aria-hidden="true">#</a> Completion menu</h3><p>The completion menu is a context sensitive menu that will present suggestions based on the status of the prompt. These suggestions can range from path suggestions to command alternatives. While writing a command, you can activate the menu to see available flags for an internal command. Also, if you have defined your custom completions for external commands, these will appear in the menu as well.</p><p>The completion menu by default is accessed by pressing <code>tab</code> and it can be configured by modifying these values from the config object:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus: <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: completion_menu
        only_buffer_difference: <span class="token boolean">false</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;| &quot;</span>                  <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: columnar          <span class="token comment"># Type of menu</span>
            columns: <span class="token number">4</span>                <span class="token comment"># Number of columns where the options are displayed</span>
            col_width: <span class="token number">20</span>             <span class="token comment"># Optional value. If missing all the screen width is used to calculate column width</span>
            col_padding: <span class="token number">2</span>            <span class="token comment"># Padding between columns</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>By modifying these parameters you can customize the layout of your menu to your liking.</p><h3 id="history-menu" tabindex="-1"><a class="header-anchor" href="#history-menu" aria-hidden="true">#</a> History menu</h3><p>The history menu is a handy way to access the editor history. When activating the menu (default <code>Ctrl+r</code>) the command history is presented in reverse chronological order, making it extremely easy to select a previous command.</p><p>The history menu can be configured by modifying these values from the config object:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: help_menu
        only_buffer_difference: <span class="token boolean">true</span> <span class="token comment"># Search is done on the text written after activating the menu</span>
        marker: <span class="token string">&quot;? &quot;</span>                 <span class="token comment"># Indicator that appears with the menu is active</span>
        type: <span class="token punctuation">{</span>
            layout: list             <span class="token comment"># Type of menu</span>
            page_size: <span class="token number">10</span>            <span class="token comment"># Number of entries that will presented when activating the menu</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green                   <span class="token comment"># Text style</span>
            selected_text: green_reverse  <span class="token comment"># Text style for selected option</span>
            description_text: yellow      <span class="token comment"># Text style for description</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div><p>When the history menu is activated, it pulls <code>page_size</code> records from the history and presents them in the menu. If there is space in the terminal, when you press <code>Ctrl+x</code> again the menu will pull the same number of records and append them to the current page. If it isn&#39;t possible to present all the pulled records, the menu will create a new page. The pages can be navigated by pressing <code>Ctrl+z</code> to go to previous page or <code>Ctrl+x</code> to go to next page.</p><h4 id="searching-the-history" tabindex="-1"><a class="header-anchor" href="#searching-the-history" aria-hidden="true">#</a> Searching the history</h4><p>To search in your history you can start typing key words for the command you are looking for. Once the menu is activated, anything that you type will be replaced by the selected command from your history. for example, say that you have already typed this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>you can place the cursor inside the <code>()</code> and activate the menu. You can filter the history by typing key words and as soon as you select an entry, the typed words will be replaced</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">let</span> a <span class="token operator">=</span> <span class="token punctuation">(</span>ls <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10MiB<span class="token punctuation">)</span>
</code></pre></div><h4 id="menu-quick-selection" tabindex="-1"><a class="header-anchor" href="#menu-quick-selection" aria-hidden="true">#</a> Menu quick selection</h4><p>Another nice feature of the menu is the ability to quick select something from it. Say you have activated your menu and it looks like this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span>
<span class="token number">0</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 10MiB
<span class="token number">1</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 20MiB
<span class="token number">2</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 30MiB
<span class="token number">3</span>: <span class="token function">ls</span> <span class="token operator">|</span> where size <span class="token operator">&gt;</span> 40MiB
</code></pre></div><p>Instead of pressing down to select the fourth entry, you can type <code>!3</code> and press enter. This will insert the selected text in the prompt position, saving you time scrolling down the menu.</p><p>History search and quick selection can be used together. You can activate the menu, do a quick search, and then quick select using the quick selection character.</p><h3 id="user-defined-menus" tabindex="-1"><a class="header-anchor" href="#user-defined-menus" aria-hidden="true">#</a> User defined menus</h3><p>In case you find that the default menus are not enough for you and you have the need to create your own menu, Nushell can help you with that.</p><p>In order to add a new menu that fulfills your needs, you can use one of the default layouts as a template. The templates available in nushell are columnar, list or description.</p><p>The columnar menu will show you data in a columnar fashion adjusting the column number based on the size of the text displayed in your columns.</p><p>The list type of menu will always display suggestions as a list, giving you the option to select values using <code>!</code> plus number combination.</p><p>The description type will give you more space to display a description for some values, together with extra information that could be inserted into the buffer.</p><p>Let&#39;s say we want to create a menu that displays all the variables created during your session, we are going to call it <code>vars_menu</code>. This menu will use a list layout (layout: list). To search for values, we want to use only the things that are written after the menu has been activated (only_buffer_difference: true).</p><p>With that in mind, the desired menu would look like this</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    menus <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">..</span>.
      <span class="token punctuation">{</span>
        name: vars_menu
        only_buffer_difference: <span class="token boolean">true</span>
        marker: <span class="token string">&quot;# &quot;</span>
        type: <span class="token punctuation">{</span>
            layout: list
            page_size: <span class="token number">10</span>
        <span class="token punctuation">}</span>
        style: <span class="token punctuation">{</span>
            text: green
            selected_text: green_reverse
            description_text: yellow
        <span class="token punctuation">}</span>
        source: <span class="token punctuation">{</span> <span class="token operator">|</span>buffer, position<span class="token operator">|</span>
            <span class="token variable">$nu</span>.scope.vars
            <span class="token operator">|</span> where name <span class="token operator">=~</span> <span class="token variable">$buffer</span>
            <span class="token operator">|</span> sort-by name
            <span class="token operator">|</span> each <span class="token punctuation">{</span> <span class="token operator">|</span>it<span class="token operator">|</span> <span class="token punctuation">{</span>value: <span class="token variable">$it</span>.name description: <span class="token variable">$it</span>.type<span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">..</span>.
    <span class="token punctuation">]</span>
    <span class="token punctuation">..</span>.
</code></pre></div>`,36),w=n("code",null,"history_menu",-1),_=n("code",null,"source",-1),x=n("code",null,"source",-1),T=n("code",null,"$nu.scope.vars",-1),M=o(`<p>The required structure for the record is the next one</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">{</span>
  value:       <span class="token comment"># The value that will be inserted in the buffer</span>
  description: <span class="token comment"># Optional. Description that will be display with the selected value</span>
  span: <span class="token punctuation">{</span>      <span class="token comment"># Optional. Span indicating what section of the string will be replaced by the value</span>
    start:
    end:
  <span class="token punctuation">}</span>
  extra: <span class="token punctuation">[</span>string<span class="token punctuation">]</span> <span class="token comment"># Optional. A list of strings that will be displayed with the selected value. Only works with a description menu</span>
<span class="token punctuation">}</span>
</code></pre></div><p>For the menu to display something, at least the <code>value</code> field has to be present in the resulting record.</p><p>In order to make the menu interactive, these two variables are available in the block: <code>$buffer</code> and <code>$position</code>. The <code>$buffer</code> contains the value captured by the menu, when the option <code>only_buffer_difference</code> is true, <code>$buffer</code> is the text written after the menu was activated. If <code>only_buffer_difference</code> is false, <code>$buffer</code> is all the string in line. The <code>$position</code> variable can be used to create replacement spans based on the idea you had for your menu. The value of <code>$position</code> changes based on whether <code>only_buffer_difference</code> is true or false. When true, <code>$position</code> is the starting position in the string where text was inserted after the menu was activated. When the value is false, <code>$position</code> indicates the actual cursor position.</p><p>Using this information, you can design your menu to present the information you require and to replace that value in the location you need it. The only thing extra that you need to play with your menu is to define a keybinding that will activate your brand new menu.</p><h3 id="menu-keybindings" tabindex="-1"><a class="header-anchor" href="#menu-keybindings" aria-hidden="true">#</a> Menu keybindings</h3><p>In case you want to change the default way both menus are activated, you can change that by defining new keybindings. For example, the next two keybindings assign the completion and history menu to <code>Ctrl+t</code> and <code>Ctrl+y</code> respectively</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>  <span class="token builtin class-name">let</span> <span class="token variable">$config</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span>.

    keybindings: <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        name: completion_menu
        modifier: control
        keycode: char_t
        mode: <span class="token punctuation">[</span>vi_insert vi_normal<span class="token punctuation">]</span>
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: completion_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menupagenext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token punctuation">{</span>
        name: history_menu
        modifier: control
        keycode: char_y
        mode: <span class="token punctuation">[</span>vi_insert vi_normal<span class="token punctuation">]</span>
        event: <span class="token punctuation">{</span>
          until: <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> send: menu name: history_menu <span class="token punctuation">}</span>
            <span class="token punctuation">{</span> send: menupagenext <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>

    <span class="token punctuation">..</span>.
  <span class="token punctuation">}</span>
</code></pre></div>`,8);function C(I,q){const p=i("ExternalLinkIcon"),a=i("RouterLink");return l(),d("div",null,[u,n("p",null,[e("Nushell's line editor "),n("a",h,[e("Reedline"),t(p)]),e(" is a cross-platform line reader designed to be modular and flexible. The engine is in charge of controlling the command history, validations, completions, hints and screen paint.")]),m,n("div",k,[g,n("p",null,[e("All of the available modifiers, keycodes and events can be found with the command "),t(a,{to:"/commands/docs/keybindings_list.html"},{default:s(()=>[y]),_:1})])]),f,n("p",null,[e("Your terminal environment may not always propagate your key combinations on to nushell the way you expect it to. You can use the command "),t(a,{to:"/commands/docs/keybindings_listen.html"},{default:s(()=>[b]),_:1}),e(" to figure out if certain keypresses are actually received by nushell, and how.")]),v,n("p",null,[e("As you can see, the new menu is identical to the "),w,e(" previously described. The only huge difference is the new field called "),t(a,{to:"/commands/docs/source.html"},{default:s(()=>[_]),_:1}),e(". The "),t(a,{to:"/commands/docs/source.html"},{default:s(()=>[x]),_:1}),e(" field is a nushell definition of the values you want to display in the menu. For this menu we are extracting the data from "),T,e(" and we are using it to create records that will be used to populate the menu.")]),M])}const R=c(r,[["render",C],["__file","line_editor.html.vue"]]);export{R as default};
