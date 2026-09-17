/* ============================================================
 * JLU_CS 生存指南 · 指北章节内容
 * 来源: README.md「吉大计院生存指北」章节, 逐段对照转录
 * status: done=已更新  todo=敬请期待
 * ============================================================ */

window.JLU_CHAPTERS = [
  { id: 'ch1', no: '第一章', t: '重生之我是计院人', s: '', status: 'todo' },
  { id: 'ch2', no: '第二章', t: '技能树点歪了怎么办', s: '论如何按照个人发展路线选择课程', status: 'todo' },
  { id: 'ch3', no: '第三章', t: '图书馆的灯永远为谁而亮', s: '论大学生肝力值的可持续发展', status: 'todo' },
  { id: 'ch4', no: '第四章', t: '通关彩蛋', s: '那些没有写进学生手册的生存秘籍', status: 'todo' },
  { id: 'ch5', no: '第五章', t: '副本选择困难症', s: '机器学习 or 深度学习是什么?是好吃的吗?', status: 'done' },
  { id: 'ch6', no: '第六章', t: '闭关修炼指南', s: '当考研教室的灯亮成永夜时', status: 'done' },
  { id: 'ch7', no: '第七章', t: '体制内的隐藏关卡', s: '从申论模板到政审迷踪的通关密码', status: 'todo' },
];

window.JLU_CH5 = `
<p class="lead">众所周知, 基本所有院校的计 / 软院都可以被称为<b>第二人工智能学院</b>, 大部分老师都沉迷(~不是~)于人工智能的研究或结合人工智能的研究。作为一名计院学子, 人工智能当然也可以是你发展的一条非常重要的路线, 不论是提高自己阅历, 还是用来做课设, 人工智能都是一个非常亮眼, 且可能在未来成为必须的一项生存技能。因此, 我在这里着重介绍一下如何入门人工智能, 以及你可以选择的学习路线。</p>

<blockquote>人工智能是计算机科学的一个分支, 旨在创建能够执行复杂任务的智能系统, 这些任务通常需要人类智能才能完成。机器学习是人工智能这一庞大概念下最为重要的领域。深度学习就隶属于机器学习。本章节主要介绍深度学习的学习路线。</blockquote>

<h4>🎯 学习路线</h4>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>阶段</th><th>内容</th><th>推荐资源</th></tr></thead>
<tbody>
<tr><td class="c"><span class="step-n">1</span></td><td><b>数学基础</b><br>线性代数、概率论和统计学</td><td>MIT 线性代数课(科研向必学)</td></tr>
<tr><td class="c"><span class="step-n">2</span></td><td><b>Python 编程</b><br>基础语法 + 数据结构</td><td>B 站黑马程序员(顺带学 Linux)</td></tr>
<tr><td class="c"><span class="step-n">3</span></td><td><b>数据处理库</b><br>必学 pandas、numpy</td><td>其他按需自学</td></tr>
<tr><td class="c"><span class="step-n">4</span></td><td><b>机器学习</b><br>k-means、k 邻近、svm、lightgbm 等</td><td>吴恩达老师机器学习课程</td></tr>
<tr><td class="c"><span class="step-n">5</span></td><td><b>深度学习</b><br>FNN、CNN、RNN 等基础模型</td><td>吴恩达深度学习(理论)+ 刘二大人(实操)</td></tr>
</tbody></table></div>

<h4>📚 阶段详解</h4>
<div class="stage">
  <div class="stage-item"><span class="step-n">1</span><div><b>数学基础</b><p>学习线性代数、概率论和统计学的课程(如果你是科研向, 需要学懂, 推荐 MIT 的线性代数课)</p></div></div>
  <div class="stage-item"><span class="step-n">2</span><div><b>Python 编程</b><p>学习 Python 编程语言, 掌握基本的语法和数据结构(推荐 B 站黑马程序员的网课, 他会顺带介绍 Linux 如何使用, 这对于以后做项目很有帮助。因为很多项目都是在 Linux 上实现)</p></div></div>
  <div class="stage-item"><span class="step-n">3</span><div><b>数据处理库</b><p>学习 Python 的一些数据处理库, <b>必学 pandas、numpy</b>。其他看情况需要自学</p></div></div>
  <div class="stage-item"><span class="step-n">4</span><div><b>机器学习</b><p>推荐吴恩达老师的机器学习课程。机器学习的话主要是学习一些常见的算法, 包括 k-means、k 邻近、svm、lightgbm 等。学习了这些算法后可以去 kaggle 或者阿里天池打一些小比赛, 深化自己对数据处理和机器学习的理解, 为深度学习作铺垫</p></div></div>
  <div class="stage-item"><span class="step-n">5</span><div><b>深度学习</b><p>知识点学习推荐吴恩达老师的深度学习课程。主要介绍神经网络的原理, FNN、CNN、RNN 等基础模型, 为后续学习更先进的模型架构作铺垫。实操推荐 B 站 UP 主<b>刘二大人</b>的深度学习课程(或者<a href="https://course.fast.ai/Lessons/lesson25.html" target="_blank" rel="noopener">动手学深度学习</a>), 简洁易懂。学完后你就可以自己做一些小项目了。比如物品分类</p></div></div>
</div>

<div class="callout warn"><b>⚠️ 避坑提醒</b>不要看李沐的课或者西瓜书, 对于零基础的人根本看不懂。李沐老师的课只建议搞科研并且有基础的同学看, 带读论文特别枯燥, 会特别劝退</div>
<div class="callout info"><b>💡 框架推荐</b><b>Pytorch</b></div>

<h4>🚀 分支方向</h4>
<blockquote>到这里你就具备了自己做项目的知识储备了。接下来是不同分支, <b>建议对感兴趣的方向深入学习, 不要追求广而浅</b></blockquote>
<div class="branch-grid">
  <article class="branch">
    <h5>💬 NLP → LLM</h5>
    <p class="path">自然语言处理 → 大语言模型</p>
    <ul><li><b>五连单排一班</b><span>B 站 · NLP</span></li><li><b>Rethinkfun</b><span>B 站 · 大模型</span></li></ul>
  </article>
  <article class="branch">
    <h5>👁️ OpenCV → CV → 多模态</h5>
    <p class="path">图像处理 → 计算机视觉 → 多模态</p>
    <ul><li><b>Python-木子</b><span>B 站 · OpenCV</span></li><li><b>Rethinkfun</b><span>B 站 · transformer、vit</span></li></ul>
  </article>
  <article class="branch">
    <h5>🎮 强化学习</h5>
    <p class="path">Q-learning → DQN → A2C → PPO</p>
    <ul><li><b>HuggingFace 强化学习入门文档</b><span>可做游戏 AI</span></li></ul>
  </article>
  <article class="branch">
    <h5>🎨 生成式模型</h5>
    <p class="path">U-net + Clip + VAE → transformer → diffusion</p>
    <ul><li><b>霹雳吧啦 Wz</b><span>B 站 · U-net</span></li><li><b>Rethinkfun</b><span>B 站 · Clip / transformer</span></li><li><b>贪玩贪吃的 Panpan</b><span>B 站 · diffusion</span></li></ul>
  </article>
</div>
`;

window.JLU_CH6 = `
<p class="lead"><b>11408 400+ 一战上岸浙大</b>的备考全攻略 —— 从择校逻辑、四阶段时间轴, 到政治 / 英语 / 数学 / 408 分科建议与复试准备。</p>

<h4>1️⃣ 前言</h4>
<blockquote>本人 <b>11408 400+ 一战上岸浙大</b>, 有竞赛, 有项目, 无论文, GPA 中等偏上, 编程基础良好。<br>以下是我个人的备考经验, 分享给各位学弟学妹, 如果你也志向浙大计 / 软院, 想咨询一些相关消息, 欢迎邮件联系我 <a href="mailto:PockeyQ@163.com">PockeyQ@163.com</a></blockquote>

<h4>2️⃣ 目标院校确立</h4>
<div class="stage">
  <div class="stage-item"><span class="step-n">1</span><div><b>地域</b><p>个人不喜欢一线的城市, 所以排除了深圳、上海、北京的院校</p></div></div>
  <div class="stage-item"><span class="step-n">2</span><div><b>专硕 / 学硕</b><p>学硕相比专硕录取人数少, 毕业要求高。本科期间没有进行过任何科研活动, 考虑到学硕考取难度高且毕业要求高, 所以只考虑专硕</p></div></div>
  <div class="stage-item"><span class="step-n">3</span><div><b>院校热度</b><p>高考没有失误的话可能会去读华科、哈威或中山。希望至少研究生能就读于比这三所院校更好的院校, 只剩<b>中科大、南大和浙大</b></p></div></div>
  <div class="stage-item"><span class="step-n">4</span><div><b>中科大、南大 vs 浙大</b><p>中科大和南大热度一直不低, 而浙大软件已经连续两年爆冷。虽然南软和科软都是 22408, 浙大是 11408, 难度会高不少, <b>但难度高亦是一种护城河</b>, 确保不会炸上天</p></div></div>
  <div class="stage-item"><span class="step-n">5</span><div><b>复录比</b><p>浙大计算机专硕往年有刷掉 410+ 的先例, 排名靠后的学生会被分配到联培</p></div></div>
</div>
<div class="callout info"><b>💡 择校心得</b>考研择校随着大家信息差的减少, 好的热门的学校最后都会变成第一层博弈。即去年爆炸的院校分数线会回落但不会太多, 爆冷的院校会涨回但不会爆炸</div>

<h4>3️⃣ 备考时间以及进度安排</h4>
<div class="phases">

  <section class="phase">
    <header><span class="ph-no">阶段一</span><h5>基础阶段</h5><time>24 年 3 月 — 24 年 6 月</time><span class="ph-hours">每天 8-9h · 不需要开始政治</span></header>
    <ul class="tasks">
      <li><b>英语</b>每天背 100 个单词(可过 2-3 轮)</li>
      <li><b>数学</b>二倍速学 1h 网课 + 做 2h 1000 题和基础 30 讲</li>
      <li><b>408</b>每天交替学习 3h:第一天 1.5h 计组 + 1.5h 操作系统;第二天 1.5h 计网 + 1.5h 数据结构。没有看网课, 直接使用王道的辅导书, 看知识点并做选择题</li>
    </ul>
    <p class="note">⚠️ 4-5 月课程比较紧张, 基本只复习了英语单词</p>
    <div class="goal"><b>7 月之前完成目标</b>
      <label><input type="checkbox" checked><span>英语单词至少过 2 轮(比较熟)</span></label>
      <label><input type="checkbox" checked><span>数学:微积分、线代、概率论知识点学完 + 基础 30 讲 + 1000 题基础部分</span></label>
      <label><input type="checkbox" checked><span>王道 408 辅导书复习两遍(第一遍做完选择题, 第二遍复习错题和重要的选择题)</span></label>
    </div>
    <p class="note">💡 不用做大题, 一方面大题比较难, 另一方面现在就做大题会特别劝退 408 基础不好的同学</p>
  </section>

  <section class="phase">
    <header><span class="ph-no">阶段二</span><h5>暑期阶段</h5><time>24 年 7 月 — 24 年 8 月</time><span class="ph-hours">每天 5-6h · 在家较松懈, 上午 3h + 下午 3h</span></header>
    <ul class="tasks">
      <li><b>英语</b>仍然每天背单词(可过 2 轮)</li>
      <li><b>数学</b>做完了 880 全书 + 喻老考研数学的 880 讲解视频(神中神!)</li>
      <li><b>408</b>7 月复习一遍王道辅导书(仔细看大题) + 8 月做天勤八套模拟卷 + 参加竟成模拟考</li>
    </ul>
    <div class="callout star"><b>⭐ 强烈推荐</b>B 站 UP 主<b>喻老考研数学</b>的 880 讲解视频。喻老师会从学生的角度出发, 讲解题目需要的前置知识点和学生视角做题碰到的一些坑, 不会特意卖弄解题技巧, 都是很基础的解题思路, 对于 4-5 月松懈了的人特别友好</div>
    <div class="goal"><b>9 月之前完成目标</b>
      <label><input type="checkbox" checked><span>英语单词过两轮(熟练)</span></label>
      <label><input type="checkbox" checked><span>数学做完 880, 每道不会的题都认真看了喻老的视频</span></label>
      <label><input type="checkbox" checked><span>408 又复习一遍, 练习完天勤八套卷, 参加了次模拟考</span></label>
    </div>
  </section>

  <section class="phase">
    <header><span class="ph-no">阶段三</span><h5>提升阶段</h5><time>24 年 9 月 — 24 年 10 月</time><span class="ph-hours">每天 7-8h · 课程需要适当放一放</span></header>
    <ul class="tasks">
      <li><b>政治</b>9 月开始:徐涛核心考案 + 二倍速看网课(留印象);10 月初看完后开始刷肖 1000、徐涛优题库(每天 100 道);10 月底能刷完一遍, 推荐用小程序刷(苍盾)</li>
      <li><b>英语</b>换本词书背诵(防止顺序记忆)+ 做 11-19 年英一真题。英二真题只需要练阅读和完型, 翻译套路不同, 英一不建议练</li>
      <li><b>数学</b>9 月每天做一章 1000 题提升部分, 10 月中做完 → 练习 24 年向前的真题 → 等模拟卷出版</li>
      <li><b>408</b>周一到周四每天交替复习知识点、选择题、大题;周五到周六每天做一张真题卷;周日复盘 → 10 月底做完真题(做到 05 年即可)</li>
    </ul>
    <div class="goal"><b>11 月之前完成目标</b>
      <label><input type="checkbox" checked><span>政治:看过一遍网课, 刷过一遍肖 1000 和徐涛优题库</span></label>
      <label><input type="checkbox" checked><span>英语:单词过两轮, 练习了 10 张英语真题</span></label>
      <label><input type="checkbox" checked><span>数学:做完 1000 题提升部分, 做了近几年的真题</span></label>
      <label><input type="checkbox" checked><span>408:复习了 1-2 遍, 做完了近 15 年真题</span></label>
    </div>
  </section>

  <section class="phase">
    <header><span class="ph-no">阶段四</span><h5>冲刺阶段</h5><time>24 年 11 月 — 24 年 12 月</time><span class="ph-hours">每天 3-4h · 后期疲软, 每天过一遍单词 + 一套卷子</span></header>
    <ul class="tasks">
      <li><b>政治</b>坚持每天刷 100 道选择题 → 肖八肖四出来后刷几遍选择题 → 跟着 B 站 UP 主背诵肖四大题</li>
      <li><b>英语</b>每天背单词 + 看英一翻译网课(唐静老师)+ 准备大小作文模板(王晶婷老师)</li>
      <li><b>数学 + 408</b>每天交替做张模拟卷</li>
    </ul>
    <div class="goal"><b>考试前完成目标</b>
      <label><input type="checkbox" checked><span>政治:肖八肖四选择题刷几遍 + 肖四大题尽可能多背</span></label>
      <label><input type="checkbox" checked><span>英语:准备好大小作文模板</span></label>
      <label><input type="checkbox" checked><span>数学和 408:一定要进行模拟考, 不然考试会发现时间完全不够用</span></label>
    </div>
  </section>
</div>

<h4>4️⃣ 政治相关</h4>
<div class="callout warn"><b>⚠️ 重要提醒</b>大家如果备战考研应该都听说过政治只需要背肖四的大题, 做肖八的选择题就行。但大家关注今年考研的话就会知道今年政治选择题更加灵活, 大题完全反押题。<b>这就打破了以往考研政治的生态</b>。所以大家对于政治不可以过于放宽心, 否则很可能遇到政治分不到院校线甚至国家线的情况。比如今年科软政治分数线 60</div>
<div class="stage">
  <div class="stage-item"><span class="step-n">9</span><div><b>9 月</b><p>开始政治复习, 每天学 1h 徐涛政治课(不用看基础班直接从提升班开始)</p></div></div>
  <div class="stage-item"><span class="step-n">10</span><div><b>10 月初</b><p>看完网课后开始刷选择题</p></div></div>
  <div class="stage-item"><span class="step-n">11</span><div><b>11 月</b><p>模拟卷(腿姐、肖八)出来 → 刷选择题</p></div></div>
  <div class="stage-item"><span class="step-n">12</span><div><b>12 月</b><p>肖四出来 → 开始背大题(虽然去年没有压中题, 但肖四最重要的是背答案中的一些语料)</p></div></div>
</div>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>政治教辅</th><th>推荐</th></tr></thead>
<tbody>
<tr><td>模拟卷</td><td>肖四、肖八、米六、米三、徐六</td></tr>
<tr><td>辅导书 / 习题</td><td>徐涛核心考案、徐涛优题库、肖 1000</td></tr>
<tr><td>刷题小程序</td><td>微信苍盾政治</td></tr>
<tr><td>基础知识网课</td><td>徐涛老师的课程</td></tr>
<tr><td>肖四带背</td><td>研木易、大牙、苏一</td></tr>
</tbody></table></div>
<details class="faq"><summary>肖八大题要不要背?</summary><div>不用, 肖八大题考虑的不是押题, 肖四才是</div></details>
<details class="faq"><summary>可以 3 月就开始准备政治吗?</summary><div>没必要, 最早不要早过 7 月</div></details>
<details class="faq"><summary>刷选择题要刷几遍?</summary><div>刷选择题是为了记住知识点, 你觉得知识点记得很熟就可以刷些新的题</div></details>
<details class="faq"><summary>市面上的技巧班、速成班有用吗?</summary><div>可能有, 但不建议临时抱佛脚, 除非你想被佛踢一脚 🤣</div></details>

<h4>5️⃣ 英语相关</h4>
<div class="callout info"><b>💡 个人情况</b>高考英语 140+, 大学后听力退步多, 但英一不考察听力。复习策略几乎只有背单词。词汇量上去了英一文章整体意思还是看得懂的</div>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>英语教辅</th><th>推荐</th></tr></thead>
<tbody>
<tr><td>真题卷</td><td>黄皮书</td></tr>
<tr><td>词汇书</td><td>闪过、考研红宝书</td></tr>
<tr><td>翻译网课</td><td>唐静</td></tr>
<tr><td>大小作文</td><td>王晶婷、王江涛</td></tr>
</tbody></table></div>
<details class="faq"><summary>英语要不要做模拟卷?</summary><div>不要, 模拟卷出题风格跟真题很不一样, 做了容易破坏道心 😇</div></details>
<details class="faq"><summary>词汇书选闪过还是红宝书?</summary><div>都可以, 差别不大</div></details>
<details class="faq"><summary>买词汇书送的一大堆附赠资料, 需要看吗?</summary><div>不用, 感觉纯凑数的, 建议只买词汇书一本</div></details>
<details class="faq"><summary>黄皮书买哪个版本?</summary><div>不要买最低档, 太多废话, 剩下两个档看你基础选择</div></details>
<details class="faq"><summary>市面上的阅读技巧班有用吗?</summary><div>如果是往年的话, 可能有。但今年的情况考研老师都没能取得一个很好的分数</div></details>
<details class="faq"><summary>田静老师的每日一句有用吗?</summary><div>有点, 尤其对于长难句解读有困难的同学。但随着词汇量上去, 其实长难句你会划分句子结构就能看懂</div></details>

<h4>6️⃣ 数学相关</h4>
<div class="callout info"><b>🎯 老师选择</b>考研数学基本就是<b>张宇</b>或者<b>武忠祥</b>二选一。但去年后期张宇出的书属实抽象得离谱(比如 600 多页的强化高数、难度超标的张八)</div>
<div class="stage">
  <div class="stage-item"><span class="step-n">3</span><div><b>3-6 月</b><p>听张宇网课 + 张宇基础 30 讲 + 张宇 1000 题基础部分</p></div></div>
  <div class="stage-item"><span class="step-n">7</span><div><b>7-8 月</b><p>李林 880 全书 + 喻老视频(神中神)</p></div></div>
  <div class="stage-item"><span class="step-n">9</span><div><b>9-10 月</b><p>张宇 1000 题提升部分 + 公众号欧几里得模拟联考</p></div></div>
  <div class="stage-item"><span class="step-n">11</span><div><b>11-12 月</b><p>近 10 年数一真题 + 各机构模拟卷</p></div></div>
</div>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>数学教辅</th><th>推荐</th></tr></thead>
<tbody>
<tr><td>模拟卷</td><td>合工大超越(最推荐)、欧几里得三套卷、余炳森五套卷、李六李四、张八张四、李艳芳四套卷</td></tr>
<tr><td>辅导书</td><td>张宇基础 30 讲 / 武忠祥的教材(适合数二)</td></tr>
<tr><td>习题集</td><td>张宇 1000 题(目前最好的)、李林 880(配合喻老师视频)、李艳芳 900 题(140+)、660(基础)</td></tr>
<tr><td>B 站 UP 主</td><td><b>处江湖之远啊</b>(张宇 1000 题)、<b>喻老考研数学</b>(880 真神)</td></tr>
<tr><td>真题讲解</td><td>李艳芳老师</td></tr>
<tr><td>每日一题</td><td>武忠祥老师(高数)、线帒杨(线代)</td></tr>
<tr><td>解题技巧</td><td>心一学长(合工大超越)、没咋了、吃尽天下面、考研数学郭伟、考研数学杰哥</td></tr>
</tbody></table></div>
<details class="faq"><summary>欧几里得的模拟考几月开始?</summary><div>7 月开始, 到 12 月考前, 每月都有一次。建议打好基础后再去, 不然会被拷打</div></details>
<details class="faq"><summary>如果模拟卷没时间多做, 最建议做哪几套?</summary><div>欧几里得三套卷、合工大超越、张四、李六李四、余炳森、张八</div></details>
<details class="faq"><summary>基础不好建议跟哪个老师?</summary><div>张宇、武忠祥都可以(喻老好像也有教学课), 大家开始准备考研时基础都差不多忘完了</div></details>
<details class="faq"><summary>可以跳过强化阶段吗?</summary><div>不是很建议, 但你要是把强化的时间都拿去考模拟卷然后认真复盘, 也不是不行</div></details>
<details class="faq"><summary>很多看上去超纲的知识点需要学吗?(条件期望、牛顿插值等)</summary><div>如果碰到了最好学, 因为考研的题不会超纲, 但使用这些常用的超纲知识点时可以节省你至少 10 分钟</div></details>

<h4>7️⃣ 408 相关</h4>
<div class="callout warn"><b>⚠️ 别忽略</b>408 看似四门课, 其实至少还牵扯 C 语言(尤为重要, 贯穿初复试)、数字电路、汇编语言三门课</div>
<ul class="bullets">
  <li>基础不好的可以看王道的视频课, 基础好的可以直接细读辅导书</li>
  <li><b>虽然 408 改革后考察范围越来越广, 但 140 分仍可通过辅导书获取</b>(可能有 10 分覆盖不到)</li>
</ul>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>408 资源</th><th>推荐</th></tr></thead>
<tbody>
<tr><td>辅导书</td><td>王道、竟成</td></tr>
<tr><td>模拟卷</td><td>竟成六套卷、ACE 六套卷、零一三套卷、王道八套卷、天勤八套卷</td></tr>
<tr><td>老师 / UP 主</td><td>王道咸鱼学长、B 站天勤率辉、B 站湖科大教书匠(计网真神, 每年出每日一题)</td></tr>
</tbody></table></div>
<details class="faq"><summary>408 需要刷题吗?</summary><div>非常有必要, 408 覆盖的知识点范围太广了, <b>想上 120 至少要刷完近 15 年真题 + 一组套卷</b></div></details>
<details class="faq"><summary>408 需要模拟考试吗?</summary><div>非常有必要, 平时做卷子最多 2h, 但上考场后 <b>3h 勉强写完</b></div></details>
<details class="faq"><summary>听说 408 大题不写步骤会扣分?</summary><div>看题目, 如果题目要求了一定要写, 没要求的也尽量把关键步骤写上去</div></details>
<details class="faq"><summary>跨考 408 完全没基础怎么办?</summary><div>建议看网课, 不用担心跨考跟别人差距太大, 大家 408 都基本忘干净了, 除了数据结构</div></details>
<details class="faq"><summary>C 语言完全不会怎么办?</summary><div>建议先看 B 站翁凯老师的课入门, 去晴问敲一两个星期的简单题。然后数据结构辅导书上的大题时不时自己跟着答案用电脑敲</div></details>
<details class="faq"><summary>408 的数据结构编程题会很难吗?</summary><div>408 的算法题基本是很基础的, 一般是简单的算法或者中等难度的数据结构。科班出身复习一下数据结构就会做了</div></details>

<h4>8️⃣ 估分相关</h4>
<div class="callout warn"><b>⚠️ 说明</b>考后虽然不建议估分, 但如果你想估分可以参考以下渠道</div>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>科目</th><th>估分渠道</th></tr></thead>
<tbody>
<tr><td>数学</td><td>微信公众号<b>考研数学郭伟</b>(给完整答案和给分点, 估得准)</td></tr>
<tr><td>英语</td><td>参照<b>黄皮书 / 新东方</b>给的答案(今年其他机构给的都不太准)</td></tr>
<tr><td>政治</td><td><b>新东方</b></td></tr>
<tr><td>408</td><td><b>王道官方 QQ 群</b></td></tr>
</tbody></table></div>
<p class="note">💡 数学比较完整答案可能出得晚几天, 其他的基本当天或第二天就会出</p>

<h4>9️⃣ 水旱区对英语政治的影响</h4>
<div class="callout info"><b>💡 查询建议</b>水旱区查询建议关注一些大的考研机构给的地区划分。光问学长学姐可能不准</div>
<div class="branch-grid two">
  <article class="branch"><h5>🏜️ 大旱区</h5><p class="path">湖北、北京</p><ul><li><b>英语</b><span>作文如果套模板被发现, 得分会比较低</span></li><li><b>政治</b><span>必须答到要点, 抄材料给分很低</span></li></ul></article>
  <article class="branch"><h5>🌊 大水区</h5><p class="path">东三省</p><ul><li><b>英语</b><span>翻译和作文改的松给分高</span></li><li><b>政治</b><span>抄材料分也不会太低</span></li></ul></article>
</div>
<div class="stage">
  <div class="stage-item"><span class="step-n">1</span><div><b>先估区间</b><p>先估一个正常的分的区间</p></div></div>
  <div class="stage-item"><span class="step-n">2</span><div><b>水区 +10</b><p>区间上限可以加 10</p></div></div>
  <div class="stage-item"><span class="step-n">3</span><div><b>旱区 −10</b><p>区间下限可以减 10</p></div></div>
  <div class="stage-item"><span class="step-n">4</span><div><b>都要准备复试</b><p>估到分后, 只要不是太低, 建议复试都要或多或少准备一下, 至少准备复试简历和 PPT(如果有要求)</p></div></div>
</div>

<h4>🔟 关于考研资料</h4>
<blockquote>尽量支持正版(南山小菊花) 🌻</blockquote>

<h4>1️⃣1️⃣ 复试如何准备</h4>
<div class="tbl-wrap"><table class="tbl">
<thead><tr><th>部分</th><th>备考建议</th></tr></thead>
<tbody>
<tr><td><b>笔试</b></td><td>关注往年目标院校的复试要求, 尽可能从学长学姐那获取往年的信息</td></tr>
<tr><td><b>机试</b></td><td>刷 pta / 晴问, 出分后每天 4 道题</td></tr>
<tr><td><b>面试</b></td><td>尽可能地包装你自己, <b>但千万不要造假</b>。实在没东西讲就尽可能细化课设介绍。还要准备好英语和专业课知识(如果有要求)</td></tr>
</tbody></table></div>

<h4>1️⃣2️⃣ 对未来考生的寄语</h4>
<blockquote>考研从来不是必选项, 我希望你们是<b>因为目的明确地去考研, 而不是因为迷茫逃避选择考研</b></blockquote>
<p>我的一个朋友, 本科期间选定就业, 刷了两遍 Leetcode, 在多家公司进行了实习, 目前在北京某厂搞后端, 年收入也有 40w+, 而他跟我说跟他同岗位的就是浙大的硕士 😭</p>
<div class="callout star"><b>所以</b>你们在选择考研前一定要想好你为什么选择这条路, 这样才不会后悔自己花了一整年时间在考研这条分支路上</div>
`;

window.JLU_CH7 = `
<div class="soon"><span class="soon-ico">📝</span><p>第七章「体制内的隐藏关卡」正在撰写中 —— 从申论模板到政审迷踪的通关密码, 敬请期待。</p></div>
`;

window.JLU_RESOURCES = [
  { n: 'Open-JLU', d: '吉大开源课程资料汇总', u: 'https://github.com/userElaina/Open-JLU' },
  { n: 'jlu-icicles', d: '吉大学长学姐留下的冰凌资料', u: 'https://github.com/thcxiker/jlu-icicles' },
];
