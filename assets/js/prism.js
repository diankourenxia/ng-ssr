/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+json+typescript+sass+vim&plugins=line-highlight+autolinker+data-uri-highlight+wpd+custom-class+file-highlight+toolbar+highlight-keywords+command-line+show-language */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}, Prism = function (g) { var c = /\blang(?:uage)?-([\w-]+)\b/i, a = 0, C = { manual: g.Prism && g.Prism.manual, disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler, util: { encode: function (e) { return e instanceof M ? new M(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " "); }, type: function (e) { return Object.prototype.toString.call(e).slice(8, -1); }, objId: function (e) { return e.__id || Object.defineProperty(e, "__id", { value: ++a }), e.__id; }, clone: function t(e, n) { var r, a, i = C.util.type(e); switch ((n = n || {}, i)) {
            case "Object":
                if (a = C.util.objId(e), n[a])
                    return n[a];
                for (var l in r = {}, n[a] = r, e)
                    e.hasOwnProperty(l) && (r[l] = t(e[l], n));
                return r;
            case "Array": return a = C.util.objId(e), n[a] ? n[a] : (r = [], n[a] = r, e.forEach(function (e, a) { r[a] = t(e, n); }), r);
            default: return e;
        } } }, languages: { extend: function (e, a) { var t = C.util.clone(C.languages[e]); for (var n in a)
            t[n] = a[n]; return t; }, insertBefore: function (t, e, a, n) { var r = (n = n || C.languages)[t], i = {}; for (var l in r)
            if (r.hasOwnProperty(l)) {
                if (l == e)
                    for (var o in a)
                        a.hasOwnProperty(o) && (i[o] = a[o]);
                a.hasOwnProperty(l) || (i[l] = r[l]);
            } var s = n[t]; return n[t] = i, C.languages.DFS(C.languages, function (e, a) { a === s && e != t && (this[e] = i); }), i; }, DFS: function e(a, t, n, r) { r = r || {}; var i = C.util.objId; for (var l in a)
            if (a.hasOwnProperty(l)) {
                t.call(a, l, a[l], n || l);
                var o = a[l], s = C.util.type(o);
                "Object" !== s || r[i(o)] ? "Array" !== s || r[i(o)] || (r[i(o)] = !0, e(o, t, l, r)) : (r[i(o)] = !0, e(o, t, null, r));
            } } }, plugins: {}, highlightAll: function (e, a) { C.highlightAllUnder(document, e, a); }, highlightAllUnder: function (e, a, t) { var n = { callback: t, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' }; C.hooks.run("before-highlightall", n); for (var r, i = n.elements || e.querySelectorAll(n.selector), l = 0; r = i[l++];)
        C.highlightElement(r, !0 === a, n.callback); }, highlightElement: function (e, a, t) { for (var n, r, i = e; i && !c.test(i.className);)
        i = i.parentNode; i && (n = (i.className.match(c) || [, ""])[1].toLowerCase(), r = C.languages[n]), e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + n, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + n)); var l = { element: e, language: n, grammar: r, code: e.textContent }, o = function (e) { l.highlightedCode = e, C.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, C.hooks.run("after-highlight", l), C.hooks.run("complete", l), t && t.call(l.element); }; if (C.hooks.run("before-sanity-check", l), l.code)
        if (C.hooks.run("before-highlight", l), l.grammar)
            if (a && g.Worker) {
                var s = new Worker(C.filename);
                s.onmessage = function (e) { o(e.data); }, s.postMessage(JSON.stringify({ language: l.language, code: l.code, immediateClose: !0 }));
            }
            else
                o(C.highlight(l.code, l.grammar, l.language));
        else
            o(C.util.encode(l.code));
    else
        C.hooks.run("complete", l); }, highlight: function (e, a, t) { var n = { code: e, grammar: a, language: t }; return C.hooks.run("before-tokenize", n), n.tokens = C.tokenize(n.code, n.grammar), C.hooks.run("after-tokenize", n), M.stringify(C.util.encode(n.tokens), n.language); }, matchGrammar: function (e, a, t, n, r, i, l) { for (var o in t)
        if (t.hasOwnProperty(o) && t[o]) {
            if (o == l)
                return;
            var s = t[o];
            s = "Array" === C.util.type(s) ? s : [s];
            for (var g = 0; g < s.length; ++g) {
                var c = s[g], u = c.inside, h = !!c.lookbehind, f = !!c.greedy, d = 0, m = c.alias;
                if (f && !c.pattern.global) {
                    var p = c.pattern.toString().match(/[imuy]*$/)[0];
                    c.pattern = RegExp(c.pattern.source, p + "g");
                }
                c = c.pattern || c;
                for (var y = n, v = r; y < a.length; v += a[y].length, ++y) {
                    var k = a[y];
                    if (a.length > e.length)
                        return;
                    if (!(k instanceof M)) {
                        if (f && y != a.length - 1) {
                            if (c.lastIndex = v, !(x = c.exec(e)))
                                break;
                            for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A)
                                (P += a[A].length) <= b && (++y, v = P);
                            if (a[y] instanceof M)
                                continue;
                            N = A - y, k = e.slice(v, P), x.index -= v;
                        }
                        else {
                            c.lastIndex = 0;
                            var x = c.exec(k), N = 1;
                        }
                        if (x) {
                            h && (d = x[1] ? x[1].length : 0);
                            w = (b = x.index + d) + (x = x[0].slice(d)).length;
                            var j = k.slice(0, b), S = k.slice(w), E = [y, N];
                            j && (++y, v += j.length, E.push(j));
                            var _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f);
                            if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a, E), 1 != N && C.matchGrammar(e, a, t, y, v, !0, o), i)
                                break;
                        }
                        else if (i)
                            break;
                    }
                }
            }
        } }, tokenize: function (e, a) { var t = [e], n = a.rest; if (n) {
        for (var r in n)
            a[r] = n[r];
        delete a.rest;
    } return C.matchGrammar(e, t, a, 0, 0, !1), t; }, hooks: { all: {}, add: function (e, a) { var t = C.hooks.all; t[e] = t[e] || [], t[e].push(a); }, run: function (e, a) { var t = C.hooks.all[e]; if (t && t.length)
            for (var n, r = 0; n = t[r++];)
                n(a); } }, Token: M }; function M(e, a, t, n, r) { this.type = e, this.content = a, this.alias = t, this.length = 0 | (n || "").length, this.greedy = !!r; } if (g.Prism = C, M.stringify = function (a, t, e) { if ("string" == typeof a)
    return a; if (Array.isArray(a))
    return a.map(function (e) { return M.stringify(e, t, a); }).join(""); var n = { type: a.type, content: M.stringify(a.content, t, e), tag: "span", classes: ["token", a.type], attributes: {}, language: t, parent: e }; if (a.alias) {
    var r = Array.isArray(a.alias) ? a.alias : [a.alias];
    Array.prototype.push.apply(n.classes, r);
} C.hooks.run("wrap", n); var i = Object.keys(n.attributes).map(function (e) { return e + '="' + (n.attributes[e] || "").replace(/"/g, "&quot;") + '"'; }).join(" "); return "<" + n.tag + ' class="' + n.classes.join(" ") + '"' + (i ? " " + i : "") + ">" + n.content + "</" + n.tag + ">"; }, !g.document)
    return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener("message", function (e) { var a = JSON.parse(e.data), t = a.language, n = a.code, r = a.immediateClose; g.postMessage(C.highlight(n, C.languages[t], t)), r && g.close(); }, !1)), C; var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop(); return e && (C.filename = e.src, C.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(C.highlightAll) : window.setTimeout(C.highlightAll, 16) : document.addEventListener("DOMContentLoaded", C.highlightAll))), C; }(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: /<!DOCTYPE[\s\S]+?>/i, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) { "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&")); }), Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function (a, e) { var s = {}; s["language-" + e] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: Prism.languages[e] }, s.cdata = /^<!\[CDATA\[|\]\]>$/i; var n = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s } }; n["language-" + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }; var i = {}; i[a] = { pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"), lookbehind: !0, greedy: !0, inside: n }, Prism.languages.insertBefore("markup", "cdata", i); } }), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) { var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/; s.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } }, url: RegExp("url\\((?:" + e.source + "|.*?)\\)", "i"), selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"), string: { pattern: e, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, s.languages.css.atrule.inside.rest = s.languages.css; var a = s.languages.markup; a && (a.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: a.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: s.languages.css } }, alias: "language-css" } }, a.tag)); }(Prism);
Prism.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
Prism.languages.javascript = Prism.languages.extend("clike", { "class-name": [Prism.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: Prism.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: Prism.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: Prism.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), Prism.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/, greedy: !0, inside: { interpolation: { pattern: /\${[^}]+}/, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: Prism.languages.javascript } }, string: /[\s\S]+/ } } }), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
Prism.languages.json = { comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 }, string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 }, number: /-?\d+\.?\d*(e[+-]?\d+)?/i, punctuation: /[{}[\],]/, operator: /:/, boolean: /\b(?:true|false)\b/, null: { pattern: /\bnull\b/, alias: "keyword" } };
Prism.languages.typescript = Prism.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ }), Prism.languages.ts = Prism.languages.typescript;
!function (e) { e.languages.sass = e.languages.extend("css", { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m, lookbehind: !0 } }), e.languages.insertBefore("sass", "atrule", { "atrule-line": { pattern: /^(?:[ \t]*)[@+=].+/m, inside: { atrule: /(?:@[\w-]+|[+=])/m } } }), delete e.languages.sass.atrule; var t = /\$[-\w]+|#\{\$[-\w]+\}/, a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, { pattern: /(\s+)-(?=\s)/, lookbehind: !0 }]; e.languages.insertBefore("sass", "property", { "variable-line": { pattern: /^[ \t]*\$.+/m, inside: { punctuation: /:/, variable: t, operator: a } }, "property-line": { pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m, inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: t, operator: a, important: e.languages.sass.important } } }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", { selector: { pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/, lookbehind: !0 } }); }(Prism);
Prism.languages.vim = { string: /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\r\n]|'')*'/, comment: /".*/, function: /\w+(?=\()/, keyword: /\b(?:ab|abbreviate|abc|abclear|abo|aboveleft|al|all|arga|argadd|argd|argdelete|argdo|arge|argedit|argg|argglobal|argl|arglocal|ar|args|argu|argument|as|ascii|bad|badd|ba|ball|bd|bdelete|be|bel|belowright|bf|bfirst|bl|blast|bm|bmodified|bn|bnext|bN|bNext|bo|botright|bp|bprevious|brea|break|breaka|breakadd|breakd|breakdel|breakl|breaklist|br|brewind|bro|browse|bufdo|b|buffer|buffers|bun|bunload|bw|bwipeout|ca|cabbrev|cabc|cabclear|caddb|caddbuffer|cad|caddexpr|caddf|caddfile|cal|call|cat|catch|cb|cbuffer|cc|ccl|cclose|cd|ce|center|cex|cexpr|cf|cfile|cfir|cfirst|cgetb|cgetbuffer|cgete|cgetexpr|cg|cgetfile|c|change|changes|chd|chdir|che|checkpath|checkt|checktime|cla|clast|cl|clist|clo|close|cmapc|cmapclear|cnew|cnewer|cn|cnext|cN|cNext|cnf|cnfile|cNfcNfile|cnorea|cnoreabbrev|col|colder|colo|colorscheme|comc|comclear|comp|compiler|conf|confirm|con|continue|cope|copen|co|copy|cpf|cpfile|cp|cprevious|cq|cquit|cr|crewind|cuna|cunabbrev|cu|cunmap|cw|cwindow|debugg|debuggreedy|delc|delcommand|d|delete|delf|delfunction|delm|delmarks|diffg|diffget|diffoff|diffpatch|diffpu|diffput|diffsplit|diffthis|diffu|diffupdate|dig|digraphs|di|display|dj|djump|dl|dlist|dr|drop|ds|dsearch|dsp|dsplit|earlier|echoe|echoerr|echom|echomsg|echon|e|edit|el|else|elsei|elseif|em|emenu|endfo|endfor|endf|endfunction|endfun|en|endif|endt|endtry|endw|endwhile|ene|enew|ex|exi|exit|exu|exusage|f|file|files|filetype|fina|finally|fin|find|fini|finish|fir|first|fix|fixdel|fo|fold|foldc|foldclose|folddoc|folddoclosed|foldd|folddoopen|foldo|foldopen|for|fu|fun|function|go|goto|gr|grep|grepa|grepadd|ha|hardcopy|h|help|helpf|helpfind|helpg|helpgrep|helpt|helptags|hid|hide|his|history|ia|iabbrev|iabc|iabclear|if|ij|ijump|il|ilist|imapc|imapclear|in|inorea|inoreabbrev|isearch|isp|isplit|iuna|iunabbrev|iu|iunmap|j|join|ju|jumps|k|keepalt|keepj|keepjumps|kee|keepmarks|laddb|laddbuffer|lad|laddexpr|laddf|laddfile|lan|language|la|last|later|lb|lbuffer|lc|lcd|lch|lchdir|lcl|lclose|let|left|lefta|leftabove|lex|lexpr|lf|lfile|lfir|lfirst|lgetb|lgetbuffer|lgete|lgetexpr|lg|lgetfile|lgr|lgrep|lgrepa|lgrepadd|lh|lhelpgrep|l|list|ll|lla|llast|lli|llist|lmak|lmake|lm|lmap|lmapc|lmapclear|lnew|lnewer|lne|lnext|lN|lNext|lnf|lnfile|lNf|lNfile|ln|lnoremap|lo|loadview|loc|lockmarks|lockv|lockvar|lol|lolder|lop|lopen|lpf|lpfile|lp|lprevious|lr|lrewind|ls|lt|ltag|lu|lunmap|lv|lvimgrep|lvimgrepa|lvimgrepadd|lw|lwindow|mak|make|ma|mark|marks|mat|match|menut|menutranslate|mk|mkexrc|mks|mksession|mksp|mkspell|mkvie|mkview|mkv|mkvimrc|mod|mode|m|move|mzf|mzfile|mz|mzscheme|nbkey|new|n|next|N|Next|nmapc|nmapclear|noh|nohlsearch|norea|noreabbrev|nu|number|nun|nunmap|omapc|omapclear|on|only|o|open|opt|options|ou|ounmap|pc|pclose|ped|pedit|pe|perl|perld|perldo|po|pop|popu|popup|pp|ppop|pre|preserve|prev|previous|p|print|P|Print|profd|profdel|prof|profile|promptf|promptfind|promptr|promptrepl|ps|psearch|pta|ptag|ptf|ptfirst|ptj|ptjump|ptl|ptlast|ptn|ptnext|ptN|ptNext|ptp|ptprevious|ptr|ptrewind|pts|ptselect|pu|put|pw|pwd|pyf|pyfile|py|python|qa|qall|q|quit|quita|quitall|r|read|rec|recover|redi|redir|red|redo|redr|redraw|redraws|redrawstatus|reg|registers|res|resize|ret|retab|retu|return|rew|rewind|ri|right|rightb|rightbelow|rub|ruby|rubyd|rubydo|rubyf|rubyfile|ru|runtime|rv|rviminfo|sal|sall|san|sandbox|sa|sargument|sav|saveas|sba|sball|sbf|sbfirst|sbl|sblast|sbm|sbmodified|sbn|sbnext|sbN|sbNext|sbp|sbprevious|sbr|sbrewind|sb|sbuffer|scripte|scriptencoding|scrip|scriptnames|se|set|setf|setfiletype|setg|setglobal|setl|setlocal|sf|sfind|sfir|sfirst|sh|shell|sign|sil|silent|sim|simalt|sla|slast|sl|sleep|sm|smagic|sm|smap|smapc|smapclear|sme|smenu|sn|snext|sN|sNext|sni|sniff|sno|snomagic|snor|snoremap|snoreme|snoremenu|sor|sort|so|source|spelld|spelldump|spe|spellgood|spelli|spellinfo|spellr|spellrepall|spellu|spellundo|spellw|spellwrong|sp|split|spr|sprevious|sre|srewind|sta|stag|startg|startgreplace|star|startinsert|startr|startreplace|stj|stjump|st|stop|stopi|stopinsert|sts|stselect|sun|sunhide|sunm|sunmap|sus|suspend|sv|sview|syncbind|t|tab|tabc|tabclose|tabd|tabdo|tabe|tabedit|tabf|tabfind|tabfir|tabfirst|tabl|tablast|tabm|tabmove|tabnew|tabn|tabnext|tabN|tabNext|tabo|tabonly|tabp|tabprevious|tabr|tabrewind|tabs|ta|tag|tags|tc|tcl|tcld|tcldo|tclf|tclfile|te|tearoff|tf|tfirst|th|throw|tj|tjump|tl|tlast|tm|tm|tmenu|tn|tnext|tN|tNext|to|topleft|tp|tprevious|tr|trewind|try|ts|tselect|tu|tu|tunmenu|una|unabbreviate|u|undo|undoj|undojoin|undol|undolist|unh|unhide|unlet|unlo|unlockvar|unm|unmap|up|update|verb|verbose|ve|version|vert|vertical|vie|view|vim|vimgrep|vimgrepa|vimgrepadd|vi|visual|viu|viusage|vmapc|vmapclear|vne|vnew|vs|vsplit|vu|vunmap|wa|wall|wh|while|winc|wincmd|windo|winp|winpos|win|winsize|wn|wnext|wN|wNext|wp|wprevious|wq|wqa|wqall|w|write|ws|wsverb|wv|wviminfo|X|xa|xall|x|xit|xm|xmap|xmapc|xmapclear|xme|xmenu|XMLent|XMLns|xn|xnoremap|xnoreme|xnoremenu|xu|xunmap|y|yank)\b/, builtin: /\b(?:autocmd|acd|ai|akm|aleph|allowrevins|altkeymap|ambiwidth|ambw|anti|antialias|arab|arabic|arabicshape|ari|arshape|autochdir|autoindent|autoread|autowrite|autowriteall|aw|awa|background|backspace|backup|backupcopy|backupdir|backupext|backupskip|balloondelay|ballooneval|balloonexpr|bdir|bdlay|beval|bex|bexpr|bg|bh|bin|binary|biosk|bioskey|bk|bkc|bomb|breakat|brk|browsedir|bs|bsdir|bsk|bt|bufhidden|buflisted|buftype|casemap|ccv|cdpath|cedit|cfu|ch|charconvert|ci|cin|cindent|cink|cinkeys|cino|cinoptions|cinw|cinwords|clipboard|cmdheight|cmdwinheight|cmp|cms|columns|com|comments|commentstring|compatible|complete|completefunc|completeopt|consk|conskey|copyindent|cot|cpo|cpoptions|cpt|cscopepathcomp|cscopeprg|cscopequickfix|cscopetag|cscopetagorder|cscopeverbose|cspc|csprg|csqf|cst|csto|csverb|cuc|cul|cursorcolumn|cursorline|cwh|debug|deco|def|define|delcombine|dex|dg|dict|dictionary|diff|diffexpr|diffopt|digraph|dip|dir|directory|dy|ea|ead|eadirection|eb|ed|edcompatible|ef|efm|ei|ek|enc|encoding|endofline|eol|ep|equalalways|equalprg|errorbells|errorfile|errorformat|esckeys|et|eventignore|expandtab|exrc|fcl|fcs|fdc|fde|fdi|fdl|fdls|fdm|fdn|fdo|fdt|fen|fenc|fencs|fex|ff|ffs|fileencoding|fileencodings|fileformat|fileformats|fillchars|fk|fkmap|flp|fml|fmr|foldcolumn|foldenable|foldexpr|foldignore|foldlevel|foldlevelstart|foldmarker|foldmethod|foldminlines|foldnestmax|foldtext|formatexpr|formatlistpat|formatoptions|formatprg|fp|fs|fsync|ft|gcr|gd|gdefault|gfm|gfn|gfs|gfw|ghr|gp|grepformat|grepprg|gtl|gtt|guicursor|guifont|guifontset|guifontwide|guiheadroom|guioptions|guipty|guitablabel|guitabtooltip|helpfile|helpheight|helplang|hf|hh|hi|hidden|highlight|hk|hkmap|hkmapp|hkp|hl|hlg|hls|hlsearch|ic|icon|iconstring|ignorecase|im|imactivatekey|imak|imc|imcmdline|imd|imdisable|imi|iminsert|ims|imsearch|inc|include|includeexpr|incsearch|inde|indentexpr|indentkeys|indk|inex|inf|infercase|insertmode|isf|isfname|isi|isident|isk|iskeyword|isprint|joinspaces|js|key|keymap|keymodel|keywordprg|km|kmp|kp|langmap|langmenu|laststatus|lazyredraw|lbr|lcs|linebreak|lines|linespace|lisp|lispwords|listchars|loadplugins|lpl|lsp|lz|macatsui|magic|makeef|makeprg|matchpairs|matchtime|maxcombine|maxfuncdepth|maxmapdepth|maxmem|maxmempattern|maxmemtot|mco|mef|menuitems|mfd|mh|mis|mkspellmem|ml|mls|mm|mmd|mmp|mmt|modeline|modelines|modifiable|modified|more|mouse|mousef|mousefocus|mousehide|mousem|mousemodel|mouses|mouseshape|mouset|mousetime|mp|mps|msm|mzq|mzquantum|nf|nrformats|numberwidth|nuw|odev|oft|ofu|omnifunc|opendevice|operatorfunc|opfunc|osfiletype|pa|para|paragraphs|paste|pastetoggle|patchexpr|patchmode|path|pdev|penc|pex|pexpr|pfn|ph|pheader|pi|pm|pmbcs|pmbfn|popt|preserveindent|previewheight|previewwindow|printdevice|printencoding|printexpr|printfont|printheader|printmbcharset|printmbfont|printoptions|prompt|pt|pumheight|pvh|pvw|qe|quoteescape|readonly|remap|report|restorescreen|revins|rightleft|rightleftcmd|rl|rlc|ro|rs|rtp|ruf|ruler|rulerformat|runtimepath|sbo|sc|scb|scr|scroll|scrollbind|scrolljump|scrolloff|scrollopt|scs|sect|sections|secure|sel|selection|selectmode|sessionoptions|sft|shcf|shellcmdflag|shellpipe|shellquote|shellredir|shellslash|shelltemp|shelltype|shellxquote|shiftround|shiftwidth|shm|shortmess|shortname|showbreak|showcmd|showfulltag|showmatch|showmode|showtabline|shq|si|sidescroll|sidescrolloff|siso|sj|slm|smartcase|smartindent|smarttab|smc|smd|softtabstop|sol|spc|spell|spellcapcheck|spellfile|spelllang|spellsuggest|spf|spl|splitbelow|splitright|sps|sr|srr|ss|ssl|ssop|stal|startofline|statusline|stl|stmp|su|sua|suffixes|suffixesadd|sw|swapfile|swapsync|swb|swf|switchbuf|sws|sxq|syn|synmaxcol|syntax|tabline|tabpagemax|tabstop|tagbsearch|taglength|tagrelative|tagstack|tal|tb|tbi|tbidi|tbis|tbs|tenc|term|termbidi|termencoding|terse|textauto|textmode|textwidth|tgst|thesaurus|tildeop|timeout|timeoutlen|title|titlelen|titleold|titlestring|toolbar|toolbariconsize|top|tpm|tsl|tsr|ttimeout|ttimeoutlen|ttm|tty|ttybuiltin|ttyfast|ttym|ttymouse|ttyscroll|ttytype|tw|tx|uc|ul|undolevels|updatecount|updatetime|ut|vb|vbs|vdir|verbosefile|vfile|viewdir|viewoptions|viminfo|virtualedit|visualbell|vop|wak|warn|wb|wc|wcm|wd|weirdinvert|wfh|wfw|whichwrap|wi|wig|wildchar|wildcharm|wildignore|wildmenu|wildmode|wildoptions|wim|winaltkeys|window|winfixheight|winfixwidth|winheight|winminheight|winminwidth|winwidth|wiv|wiw|wm|wmh|wmnu|wmw|wop|wrap|wrapmargin|wrapscan|writeany|writebackup|writedelay|ww|noacd|noai|noakm|noallowrevins|noaltkeymap|noanti|noantialias|noar|noarab|noarabic|noarabicshape|noari|noarshape|noautochdir|noautoindent|noautoread|noautowrite|noautowriteall|noaw|noawa|nobackup|noballooneval|nobeval|nobin|nobinary|nobiosk|nobioskey|nobk|nobl|nobomb|nobuflisted|nocf|noci|nocin|nocindent|nocompatible|noconfirm|noconsk|noconskey|nocopyindent|nocp|nocscopetag|nocscopeverbose|nocst|nocsverb|nocuc|nocul|nocursorcolumn|nocursorline|nodeco|nodelcombine|nodg|nodiff|nodigraph|nodisable|noea|noeb|noed|noedcompatible|noek|noendofline|noeol|noequalalways|noerrorbells|noesckeys|noet|noex|noexpandtab|noexrc|nofen|nofk|nofkmap|nofoldenable|nogd|nogdefault|noguipty|nohid|nohidden|nohk|nohkmap|nohkmapp|nohkp|nohls|noic|noicon|noignorecase|noim|noimc|noimcmdline|noimd|noincsearch|noinf|noinfercase|noinsertmode|nois|nojoinspaces|nojs|nolazyredraw|nolbr|nolinebreak|nolisp|nolist|noloadplugins|nolpl|nolz|noma|nomacatsui|nomagic|nomh|noml|nomod|nomodeline|nomodifiable|nomodified|nomore|nomousef|nomousefocus|nomousehide|nonu|nonumber|noodev|noopendevice|nopaste|nopi|nopreserveindent|nopreviewwindow|noprompt|nopvw|noreadonly|noremap|norestorescreen|norevins|nori|norightleft|norightleftcmd|norl|norlc|noro|nors|noru|noruler|nosb|nosc|noscb|noscrollbind|noscs|nosecure|nosft|noshellslash|noshelltemp|noshiftround|noshortname|noshowcmd|noshowfulltag|noshowmatch|noshowmode|nosi|nosm|nosmartcase|nosmartindent|nosmarttab|nosmd|nosn|nosol|nospell|nosplitbelow|nosplitright|nospr|nosr|nossl|nosta|nostartofline|nostmp|noswapfile|noswf|nota|notagbsearch|notagrelative|notagstack|notbi|notbidi|notbs|notermbidi|noterse|notextauto|notextmode|notf|notgst|notildeop|notimeout|notitle|noto|notop|notr|nottimeout|nottybuiltin|nottyfast|notx|novb|novisualbell|nowa|nowarn|nowb|noweirdinvert|nowfh|nowfw|nowildmenu|nowinfixheight|nowinfixwidth|nowiv|nowmnu|nowrap|nowrapscan|nowrite|nowriteany|nowritebackup|nows|invacd|invai|invakm|invallowrevins|invaltkeymap|invanti|invantialias|invar|invarab|invarabic|invarabicshape|invari|invarshape|invautochdir|invautoindent|invautoread|invautowrite|invautowriteall|invaw|invawa|invbackup|invballooneval|invbeval|invbin|invbinary|invbiosk|invbioskey|invbk|invbl|invbomb|invbuflisted|invcf|invci|invcin|invcindent|invcompatible|invconfirm|invconsk|invconskey|invcopyindent|invcp|invcscopetag|invcscopeverbose|invcst|invcsverb|invcuc|invcul|invcursorcolumn|invcursorline|invdeco|invdelcombine|invdg|invdiff|invdigraph|invdisable|invea|inveb|inved|invedcompatible|invek|invendofline|inveol|invequalalways|inverrorbells|invesckeys|invet|invex|invexpandtab|invexrc|invfen|invfk|invfkmap|invfoldenable|invgd|invgdefault|invguipty|invhid|invhidden|invhk|invhkmap|invhkmapp|invhkp|invhls|invhlsearch|invic|invicon|invignorecase|invim|invimc|invimcmdline|invimd|invincsearch|invinf|invinfercase|invinsertmode|invis|invjoinspaces|invjs|invlazyredraw|invlbr|invlinebreak|invlisp|invlist|invloadplugins|invlpl|invlz|invma|invmacatsui|invmagic|invmh|invml|invmod|invmodeline|invmodifiable|invmodified|invmore|invmousef|invmousefocus|invmousehide|invnu|invnumber|invodev|invopendevice|invpaste|invpi|invpreserveindent|invpreviewwindow|invprompt|invpvw|invreadonly|invremap|invrestorescreen|invrevins|invri|invrightleft|invrightleftcmd|invrl|invrlc|invro|invrs|invru|invruler|invsb|invsc|invscb|invscrollbind|invscs|invsecure|invsft|invshellslash|invshelltemp|invshiftround|invshortname|invshowcmd|invshowfulltag|invshowmatch|invshowmode|invsi|invsm|invsmartcase|invsmartindent|invsmarttab|invsmd|invsn|invsol|invspell|invsplitbelow|invsplitright|invspr|invsr|invssl|invsta|invstartofline|invstmp|invswapfile|invswf|invta|invtagbsearch|invtagrelative|invtagstack|invtbi|invtbidi|invtbs|invtermbidi|invterse|invtextauto|invtextmode|invtf|invtgst|invtildeop|invtimeout|invtitle|invto|invtop|invtr|invttimeout|invttybuiltin|invttyfast|invtx|invvb|invvisualbell|invwa|invwarn|invwb|invweirdinvert|invwfh|invwfw|invwildmenu|invwinfixheight|invwinfixwidth|invwiv|invwmnu|invwrap|invwrapscan|invwrite|invwriteany|invwritebackup|invws|t_AB|t_AF|t_al|t_AL|t_bc|t_cd|t_ce|t_Ce|t_cl|t_cm|t_Co|t_cs|t_Cs|t_CS|t_CV|t_da|t_db|t_dl|t_DL|t_EI|t_F1|t_F2|t_F3|t_F4|t_F5|t_F6|t_F7|t_F8|t_F9|t_fs|t_IE|t_IS|t_k1|t_K1|t_k2|t_k3|t_K3|t_k4|t_K4|t_k5|t_K5|t_k6|t_K6|t_k7|t_K7|t_k8|t_K8|t_k9|t_K9|t_KA|t_kb|t_kB|t_KB|t_KC|t_kd|t_kD|t_KD|t_ke|t_KE|t_KF|t_KG|t_kh|t_KH|t_kI|t_KI|t_KJ|t_KK|t_kl|t_KL|t_kN|t_kP|t_kr|t_ks|t_ku|t_le|t_mb|t_md|t_me|t_mr|t_ms|t_nd|t_op|t_RI|t_RV|t_Sb|t_se|t_Sf|t_SI|t_so|t_sr|t_te|t_ti|t_ts|t_ue|t_us|t_ut|t_vb|t_ve|t_vi|t_vs|t_WP|t_WS|t_xs|t_ZH|t_ZR)\b/, number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?)\b/i, operator: /\|\||&&|[-+.]=?|[=!](?:[=~][#?]?)?|[<>]=?[#?]?|[*\/%?]|\b(?:is(?:not)?)\b/, punctuation: /[{}[\](),;:]/ };
!function () { if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
    var t, h = function () { if (void 0 === t) {
        var e = document.createElement("div");
        e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = 0, e.style.border = 0, e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e);
    } return t; }, l = 0;
    Prism.hooks.add("before-sanity-check", function (e) { var t = e.element.parentNode, n = t && t.getAttribute("data-line"); if (t && n && /pre/i.test(t.nodeName)) {
        var i = 0;
        r(".line-highlight", t).forEach(function (e) { i += e.textContent.length, e.parentNode.removeChild(e); }), i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i));
    } }), Prism.hooks.add("complete", function e(t) { var n = t.element.parentNode, i = n && n.getAttribute("data-line"); if (n && i && /pre/i.test(n.nodeName)) {
        clearTimeout(l);
        var r = Prism.plugins.lineNumbers, o = t.plugins && t.plugins.lineNumbers;
        g(n, "line-numbers") && r && !o ? Prism.hooks.add("line-numbers", e) : (a(n, i), l = setTimeout(s, 1));
    } }), window.addEventListener("hashchange", s), window.addEventListener("resize", function () { var e = document.querySelectorAll("pre[data-line]"); Array.prototype.forEach.call(e, function (e) { a(e); }); });
} function r(e, t) { return Array.prototype.slice.call((t || document).querySelectorAll(e)); } function g(e, t) { return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t); } function a(e, t, n) { for (var i, r = (t = "string" == typeof t ? t : e.getAttribute("data-line")).replace(/\s+/g, "").split(","), o = +e.getAttribute("data-line-offset") || 0, l = (h() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight), a = g(e, "line-numbers"), s = 0; i = r[s++];) {
    var d = i.split("-"), u = +d[0], c = +d[1] || u, m = e.querySelector('.line-highlight[data-range="' + i + '"]') || document.createElement("div");
    if (m.setAttribute("aria-hidden", "true"), m.setAttribute("data-range", i), m.className = (n || "") + " line-highlight", a && Prism.plugins.lineNumbers) {
        var p = Prism.plugins.lineNumbers.getLine(e, u), f = Prism.plugins.lineNumbers.getLine(e, c);
        p && (m.style.top = p.offsetTop + "px"), f && (m.style.height = f.offsetTop - p.offsetTop + f.offsetHeight + "px");
    }
    else
        m.setAttribute("data-start", u), u < c && m.setAttribute("data-end", c), m.style.top = (u - o - 1) * l + "px", m.textContent = new Array(c - u + 2).join(" \n");
    a ? e.appendChild(m) : (e.querySelector("code") || e).appendChild(m);
} } function s() { var e = location.hash.slice(1); r(".temporary.line-highlight").forEach(function (e) { e.parentNode.removeChild(e); }); var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1]; if (t && !document.getElementById(e)) {
    var n = e.slice(0, e.lastIndexOf(".")), i = document.getElementById(n);
    i && (i.hasAttribute("data-line") || i.setAttribute("data-line", ""), a(i, t, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView());
} } }();
!function () { if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
    var t = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&]+(?:\?[\w\-+%~/.:#=?&!$'()*,;]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;]*)?/, r = /\b\S+@[\w.]+[a-z]{2}/, a = /\[([^\]]+)]\(([^)]+)\)/, l = ["comment", "url", "attr-value", "string"];
    Prism.plugins.autolinker = { processGrammar: function (i) { i && !i["url-link"] && (Prism.languages.DFS(i, function (i, n, e) { -1 < l.indexOf(e) && !Array.isArray(n) && (n.pattern || (n = this[i] = { pattern: n }), n.inside = n.inside || {}, "comment" == e && (n.inside["md-link"] = a), "attr-value" == e ? Prism.languages.insertBefore("inside", "punctuation", { "url-link": t }, n) : n.inside["url-link"] = t, n.inside["email-link"] = r); }), i["url-link"] = t, i["email-link"] = r); } }, Prism.hooks.add("before-highlight", function (i) { Prism.plugins.autolinker.processGrammar(i.grammar); }), Prism.hooks.add("wrap", function (i) { if (/-link$/.test(i.type)) {
        i.tag = "a";
        var n = i.content;
        if ("email-link" == i.type && 0 != n.indexOf("mailto:"))
            n = "mailto:" + n;
        else if ("md-link" == i.type) {
            var e = i.content.match(a);
            n = e[2], i.content = e[1];
        }
        i.attributes.href = n;
        try {
            i.content = decodeURIComponent(i.content);
        }
        catch (i) { }
    } });
} }();
!function () { if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
    var r = { pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/, lookbehind: !0, inside: { "language-css": { pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/, lookbehind: !0 }, "language-javascript": { pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/, lookbehind: !0 }, "language-json": { pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/, lookbehind: !0 }, "language-markup": { pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/, lookbehind: !0 } } }, e = ["url", "attr-value", "string"];
    Prism.plugins.dataURIHighlight = { processGrammar: function (i) { i && !i["data-uri"] && (Prism.languages.DFS(i, function (i, a, n) { -1 < e.indexOf(n) && !Array.isArray(a) && (a.pattern || (a = this[i] = { pattern: a }), a.inside = a.inside || {}, "attr-value" == n ? Prism.languages.insertBefore("inside", a.inside["url-link"] ? "url-link" : "punctuation", { "data-uri": r }, a) : a.inside["url-link"] ? Prism.languages.insertBefore("inside", "url-link", { "data-uri": r }, a) : a.inside["data-uri"] = r); }), i["data-uri"] = r); } }, Prism.hooks.add("before-highlight", function (i) { if (r.pattern.test(i.code))
        for (var a in r.inside)
            if (r.inside.hasOwnProperty(a) && !r.inside[a].inside && r.inside[a].pattern.test(i.code)) {
                var n = a.match(/^language-(.+)/)[1];
                Prism.languages[n] && (r.inside[a].inside = { rest: (e = Prism.languages[n], Prism.plugins.autolinker && Prism.plugins.autolinker.processGrammar(e), e) });
            } var e; Prism.plugins.dataURIHighlight.processGrammar(i.grammar); });
} }();
!function () { if (("undefined" == typeof self || self.Prism) && ("undefined" == typeof global || global.Prism)) {
    if (Prism.languages.css && (Prism.languages.css.selector.pattern ? (Prism.languages.css.selector.inside["pseudo-class"] = /:[\w-]+/, Prism.languages.css.selector.inside["pseudo-element"] = /::[\w-]+/) : Prism.languages.css.selector = { pattern: Prism.languages.css.selector, inside: { "pseudo-class": /:[\w-]+/, "pseudo-element": /::[\w-]+/ } }), Prism.languages.markup) {
        Prism.languages.markup.tag.inside.tag.inside["tag-id"] = /[\w-]+/;
        var s = { HTML: { a: 1, abbr: 1, acronym: 1, b: 1, basefont: 1, bdo: 1, big: 1, blink: 1, cite: 1, code: 1, dfn: 1, em: 1, kbd: 1, i: 1, rp: 1, rt: 1, ruby: 1, s: 1, samp: 1, small: 1, spacer: 1, strike: 1, strong: 1, sub: 1, sup: 1, time: 1, tt: 1, u: 1, var: 1, wbr: 1, noframes: 1, summary: 1, command: 1, dt: 1, dd: 1, figure: 1, figcaption: 1, center: 1, section: 1, nav: 1, article: 1, aside: 1, hgroup: 1, header: 1, footer: 1, address: 1, noscript: 1, isIndex: 1, main: 1, mark: 1, marquee: 1, meter: 1, menu: 1 }, SVG: { animateColor: 1, animateMotion: 1, animateTransform: 1, glyph: 1, feBlend: 1, feColorMatrix: 1, feComponentTransfer: 1, feFuncR: 1, feFuncG: 1, feFuncB: 1, feFuncA: 1, feComposite: 1, feConvolveMatrix: 1, feDiffuseLighting: 1, feDisplacementMap: 1, feFlood: 1, feGaussianBlur: 1, feImage: 1, feMerge: 1, feMergeNode: 1, feMorphology: 1, feOffset: 1, feSpecularLighting: 1, feTile: 1, feTurbulence: 1, feDistantLight: 1, fePointLight: 1, feSpotLight: 1, linearGradient: 1, radialGradient: 1, altGlyph: 1, textPath: 1, tref: 1, altglyph: 1, textpath: 1, altglyphdef: 1, altglyphitem: 1, clipPath: 1, "color-profile": 1, cursor: 1, "font-face": 1, "font-face-format": 1, "font-face-name": 1, "font-face-src": 1, "font-face-uri": 1, foreignObject: 1, glyphRef: 1, hkern: 1, vkern: 1 }, MathML: {} };
    }
    var a;
    Prism.hooks.add("wrap", function (e) { if (("tag-id" == e.type || "property" == e.type && 0 != e.content.indexOf("-") || "rule" == e.type && 0 != e.content.indexOf("@-") || "pseudo-class" == e.type && 0 != e.content.indexOf(":-") || "pseudo-element" == e.type && 0 != e.content.indexOf("::-") || "attr-name" == e.type && 0 != e.content.indexOf("data-")) && -1 === e.content.indexOf("<") && ("css" == e.language || "scss" == e.language || "markup" == e.language)) {
        var t = "https://webplatform.github.io/docs/", n = e.content;
        if ("css" == e.language || "scss" == e.language)
            t += "css/", "property" == e.type ? t += "properties/" : "rule" == e.type ? (t += "atrules/", n = n.substring(1)) : "pseudo-class" == e.type ? (t += "selectors/pseudo-classes/", n = n.substring(1)) : "pseudo-element" == e.type && (t += "selectors/pseudo-elements/", n = n.substring(2));
        else if ("markup" == e.language)
            if ("tag-id" == e.type) {
                if (!(a = function (e) { var t = e.toLowerCase(); {
                    if (s.HTML[t])
                        return "html";
                    if (s.SVG[e])
                        return "svg";
                    if (s.MathML[e])
                        return "mathml";
                } if (0 !== s.HTML[t] && "undefined" != typeof document) {
                    var n = (document.createElement(e).toString().match(/\[object HTML(.+)Element\]/) || [])[1];
                    if (n && "Unknown" != n)
                        return s.HTML[t] = 1, "html";
                } if ((s.HTML[t] = 0) !== s.SVG[e] && "undefined" != typeof document) {
                    var a = (document.createElementNS("http://www.w3.org/2000/svg", e).toString().match(/\[object SVG(.+)Element\]/) || [])[1];
                    if (a && "Unknown" != a)
                        return s.SVG[e] = 1, "svg";
                } if ((s.SVG[e] = 0) !== s.MathML[e] && 0 === e.indexOf("m"))
                    return s.MathML[e] = 1, "mathml"; return s.MathML[e] = 0, null; }(e.content) || a))
                    return;
                t += a + "/elements/";
            }
            else if ("attr-name" == e.type) {
                if (!a)
                    return;
                t += a + "/attributes/";
            }
        t += n, e.tag = "a", e.attributes.href = t, e.attributes.target = "_blank";
    } });
} }();
!function () { if ("undefined" != typeof self && self.Prism || "undefined" != typeof global && global.Prism) {
    var i = { classMap: {} };
    Prism.plugins.customClass = { map: function (s) { i.classMap = s; }, prefix: function (s) { i.prefixString = s; } }, Prism.hooks.add("wrap", function (s) { (i.classMap || i.prefixString) && (s.classes = s.classes.map(function (s) { return (i.prefixString || "") + (i.classMap[s] || s); })); });
} }();
"undefined" != typeof self && self.Prism && self.document && document.querySelector && (self.Prism.fileHighlight = function (t) { t = t || document; var i = { js: "javascript", py: "python", rb: "ruby", ps1: "powershell", psm1: "powershell", sh: "bash", bat: "batch", h: "c", tex: "latex" }; Array.prototype.slice.call(t.querySelectorAll("pre[data-src]")).forEach(function (t) { if (!t.hasAttribute("data-src-loaded")) {
    for (var e, a = t.getAttribute("data-src"), n = t, r = /\blang(?:uage)?-([\w-]+)\b/i; n && !r.test(n.className);)
        n = n.parentNode;
    if (n && (e = (t.className.match(r) || [, ""])[1]), !e) {
        var s = (a.match(/\.(\w+)$/) || [, ""])[1];
        e = i[s] || s;
    }
    var o = document.createElement("code");
    o.className = "language-" + e, t.textContent = "", o.textContent = "Loading…", t.appendChild(o);
    var l = new XMLHttpRequest;
    l.open("GET", a, !0), l.onreadystatechange = function () { 4 == l.readyState && (l.status < 400 && l.responseText ? (o.textContent = l.responseText, Prism.highlightElement(o), t.setAttribute("data-src-loaded", "")) : 400 <= l.status ? o.textContent = "✖ Error " + l.status + " while fetching file: " + l.statusText : o.textContent = "✖ Error: File does not exist or is empty"); }, l.send(null);
} }), Prism.plugins.toolbar && Prism.plugins.toolbar.registerButton("download-file", function (t) { var e = t.element.parentNode; if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-src") && e.hasAttribute("data-download-link")) {
    var a = e.getAttribute("data-src"), n = document.createElement("a");
    return n.textContent = e.getAttribute("data-download-link-label") || "Download", n.setAttribute("download", ""), n.href = a, n;
} }); }, document.addEventListener("DOMContentLoaded", function () { self.Prism.fileHighlight(); }));
!function () { if ("undefined" != typeof self && self.Prism && self.document) {
    var r = [], i = {}, n = function () { };
    Prism.plugins.toolbar = {};
    var t = Prism.plugins.toolbar.registerButton = function (t, n) { var e; e = "function" == typeof n ? n : function (t) { var e; return "function" == typeof n.onClick ? ((e = document.createElement("button")).type = "button", e.addEventListener("click", function () { n.onClick.call(this, t); })) : "string" == typeof n.url ? (e = document.createElement("a")).href = n.url : e = document.createElement("span"), e.textContent = n.text, e; }, t in i ? console.warn('There is a button with the key "' + t + '" registered already.') : r.push(i[t] = e); }, e = Prism.plugins.toolbar.hook = function (a) { var t = a.element.parentNode; if (t && /pre/i.test(t.nodeName) && !t.parentNode.classList.contains("code-toolbar")) {
        var e = document.createElement("div");
        e.classList.add("code-toolbar"), t.parentNode.insertBefore(e, t), e.appendChild(t);
        var o = document.createElement("div");
        o.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (r = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) { return i[t] || n; })), r.forEach(function (t) { var e = t(a); if (e) {
            var n = document.createElement("div");
            n.classList.add("toolbar-item"), n.appendChild(e), o.appendChild(n);
        } }), e.appendChild(o);
    } };
    t("label", function (t) { var e = t.element.parentNode; if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
        var n, a, o = e.getAttribute("data-label");
        try {
            a = document.querySelector("template#" + o);
        }
        catch (t) { }
        return a ? n = a.content : (e.hasAttribute("data-url") ? (n = document.createElement("a")).href = e.getAttribute("data-url") : n = document.createElement("span"), n.textContent = o), n;
    } }), Prism.hooks.add("complete", e);
} }();
"undefined" != typeof self && !self.Prism || "undefined" != typeof global && !global.Prism || Prism.hooks.add("wrap", function (e) { "keyword" === e.type && e.classes.push("keyword-" + e.content); });
!function () { if ("undefined" != typeof self && self.Prism && self.document) {
    var u = /(?:^|\s)command-line(?:\s|$)/;
    Prism.hooks.add("before-highlight", function (e) { var t = e.vars = e.vars || {}, a = t["command-line"] = t["command-line"] || {}; if (!a.complete && e.code) {
        var n = e.element.parentNode;
        if (n && /pre/i.test(n.nodeName) && (u.test(n.className) || u.test(e.element.className)))
            if (e.element.querySelector(".command-line-prompt"))
                a.complete = !0;
            else {
                var r = e.code.split("\n");
                a.numberOfLines = r.length;
                var s = a.outputLines = [], o = n.getAttribute("data-output"), i = n.getAttribute("data-filter-output");
                if (o || "" === o) {
                    o = o.split(",");
                    for (var l = 0; l < o.length; l++) {
                        var m = o[l].split("-"), p = parseInt(m[0], 10), d = 2 === m.length ? parseInt(m[1], 10) : p;
                        if (!isNaN(p) && !isNaN(d)) {
                            p < 1 && (p = 1), d > r.length && (d = r.length), d--;
                            for (var c = --p; c <= d; c++)
                                s[c] = r[c], r[c] = "";
                        }
                    }
                }
                else if (i)
                    for (l = 0; l < r.length; l++)
                        0 === r[l].indexOf(i) && (s[l] = r[l].slice(i.length), r[l] = "");
                e.code = r.join("\n");
            }
        else
            a.complete = !0;
    }
    else
        a.complete = !0; }), Prism.hooks.add("before-insert", function (e) { var t = e.vars = e.vars || {}, a = t["command-line"] = t["command-line"] || {}; if (!a.complete) {
        for (var n = e.highlightedCode.split("\n"), r = 0; r < a.outputLines.length; r++)
            a.outputLines.hasOwnProperty(r) && (n[r] = a.outputLines[r]);
        e.highlightedCode = n.join("\n");
    } }), Prism.hooks.add("complete", function (e) { var t = e.vars = e.vars || {}, a = t["command-line"] = t["command-line"] || {}; if (!a.complete) {
        var n = e.element.parentNode;
        u.test(e.element.className) && (e.element.className = e.element.className.replace(u, " ")), u.test(n.className) || (n.className += " command-line");
        var r = function (e, t) { return (n.getAttribute(e) || t).replace(/"/g, "&quot"); }, s = new Array(a.numberOfLines + 1), o = r("data-prompt", "");
        if ("" !== o)
            s = s.join('<span data-prompt="' + o + '"></span>');
        else {
            var i = r("data-user", "user"), l = r("data-host", "localhost");
            s = s.join('<span data-user="' + i + '" data-host="' + l + '"></span>');
        }
        var m = document.createElement("span");
        m.className = "command-line-prompt", m.innerHTML = s;
        for (var p = 0; p < a.outputLines.length; p++)
            if (a.outputLines.hasOwnProperty(p)) {
                var d = m.children[p];
                d.removeAttribute("data-user"), d.removeAttribute("data-host"), d.removeAttribute("data-prompt");
            }
        e.element.insertBefore(m, e.element.firstChild), a.complete = !0;
    } });
} }();
!function () { if ("undefined" != typeof self && self.Prism && self.document)
    if (Prism.plugins.toolbar) {
        var r = { html: "HTML", xml: "XML", svg: "SVG", mathml: "MathML", css: "CSS", clike: "C-like", js: "JavaScript", abap: "ABAP", abnf: "Augmented Backus–Naur form", apacheconf: "Apache Configuration", apl: "APL", arff: "ARFF", asciidoc: "AsciiDoc", adoc: "AsciiDoc", asm6502: "6502 Assembly", aspnet: "ASP.NET (C#)", autohotkey: "AutoHotkey", autoit: "AutoIt", shell: "Bash", basic: "BASIC", bnf: "Backus–Naur form", rbnf: "Routing Backus–Naur form", csharp: "C#", dotnet: "C#", cpp: "C++", cil: "CIL", coffee: "CoffeeScript", cmake: "CMake", csp: "Content-Security-Policy", "css-extras": "CSS Extras", django: "Django/Jinja2", jinja2: "Django/Jinja2", dockerfile: "Docker", ebnf: "Extended Backus–Naur form", ejs: "EJS", erb: "ERB", fsharp: "F#", gcode: "G-code", gedcom: "GEDCOM", glsl: "GLSL", gml: "GameMaker Language", gamemakerlanguage: "GameMaker Language", graphql: "GraphQL", hs: "Haskell", hcl: "HCL", http: "HTTP", hpkp: "HTTP Public-Key-Pins", hsts: "HTTP Strict-Transport-Security", ichigojam: "IchigoJam", inform7: "Inform 7", javadoc: "JavaDoc", javadoclike: "JavaDoc-like", javastacktrace: "Java stack trace", jsdoc: "JSDoc", "js-extras": "JS Extras", json: "JSON", jsonp: "JSONP", json5: "JSON5", latex: "LaTeX", emacs: "Lisp", elisp: "Lisp", "emacs-lisp": "Lisp", lolcode: "LOLCODE", md: "Markdown", "markup-templating": "Markup templating", matlab: "MATLAB", mel: "MEL", n1ql: "N1QL", n4js: "N4JS", n4jsd: "N4JS", "nand2tetris-hdl": "Nand To Tetris HDL", nasm: "NASM", nginx: "nginx", nsis: "NSIS", objectivec: "Objective-C", ocaml: "OCaml", opencl: "OpenCL", parigp: "PARI/GP", objectpascal: "Object Pascal", php: "PHP", phpdoc: "PHPDoc", "php-extras": "PHP Extras", plsql: "PL/SQL", powershell: "PowerShell", properties: ".properties", protobuf: "Protocol Buffers", py: "Python", q: "Q (kdb+ database)", jsx: "React JSX", tsx: "React TSX", renpy: "Ren'py", rest: "reST (reStructuredText)", rb: "Ruby", sas: "SAS", sass: "Sass (Sass)", scss: "Sass (Scss)", sql: "SQL", soy: "Soy (Closure Template)", tap: "TAP", toml: "TOML", tt2: "Template Toolkit 2", ts: "TypeScript", "t4-cs": "T4 Text Templates (C#)", t4: "T4 Text Templates (C#)", "t4-vb": "T4 Text Templates (VB)", "t4-templating": "T4 templating", vbnet: "VB.Net", vhdl: "VHDL", vim: "vim", "visual-basic": "Visual Basic", vb: "Visual Basic", wasm: "WebAssembly", wiki: "Wiki markup", xeoracube: "XeoraCube", xojo: "Xojo (REALbasic)", xquery: "XQuery", yaml: "YAML", yml: "YAML" };
        Prism.plugins.toolbar.registerButton("show-language", function (e) { var a = e.element.parentNode; if (a && /pre/i.test(a.nodeName)) {
            var s, t = a.getAttribute("data-language") || r[e.language] || ((s = e.language) ? (s.substring(0, 1).toUpperCase() + s.substring(1)).replace(/s(?=cript)/, "S") : s);
            if (t) {
                var o = document.createElement("span");
                return o.textContent = t, o;
            }
        } });
    }
    else
        console.warn("Show Languages plugin loaded before Toolbar plugin."); }();