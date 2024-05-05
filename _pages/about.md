---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

# 🧑🏻‍💻 About me

I am currently a junior undergraduate student from [Mixed Class, Chu Kochen Honors College](http://ckc.zju.edu.cn/ckcen/) of [Zhejiang University](https://www.zju.edu.cn/english/), majoring in Computer Science and Technology. My advisors are professor [Chunhua Shen](https://cshen.github.io/) and [Hao Chen](https://stan-haochen.github.io/) who are affiliated to [State Key Lab of CAD & CG, Zhejiang University](http://www.cad.zju.edu.cn/english.html).

I am keenly interested in research topics associated with Artificial Intelligence assisted Biomolecule Design, Materials&Drug Discovery, and Diffusion Models. My prior research experience encompasses protein design and the prediction of crystal structures and properties. Currently, I am engaged in exploring diverse areas, including co-designing protein structures and sequences, utilizing diffusion models for the creation of innovative crystal structures, protein motif scaffolding, and the design of protein binders.

<span style="color: red;">I am looking for PhD position for Fall 2025 intake, if you have any clues please feel free to contact me.</span>

# 🔥 News

- *2024.05*: &nbsp;🎉🎉 One paper has been accepted by ICML'2024 
- *2024.01*: &nbsp;🎉🎉 The first paper I participated in was accepted by ICLR'2024. 

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML'2024</div><img src='images/fadiff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Floating Anchor Diffusion Model for Multi-motif Scaffolding**

Ke Liu, **Shuaike Shen**, Weian Mao, Xiaoran Jiao, Zheng Sun, Hao Chen<sup>†</sup>, Chunhua Shen<sup>†</sup>

[**\[Project Page\]**](https://bioai-nexus.github.io/projects/FADiff/) [**\[Code\]**](https://github.com/AI4MOL/FADiff) 

**Introduction**

- A method to scaffold *multiple protein functional motifs without prior knowledge*. FADiff is based on a diffusion process which is modified to take into account the movement of the single motifs as **independent rigid bodies**.

</div>
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR'2024 spotlight</div><img src='images/vfn.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**De novo Protein Design Using Geometric Vector Field Networks**

Weian Mao<sup>\*</sup>, Zheng Sun<sup>\*</sup>, Muzhi Zhu<sup>\*</sup>, **Shuaike Shen**, Lin Yuanbo Wu, Hao Chen<sup>†</sup>, Chunhua Shen<sup>†</sup>

[**\[Code\]**](https://github.com/aim-uofa/VFN) [**\[Project Page\]**](https://bioai-nexus.github.io/projects/VFN/) [**\[Paper\]**](https://openreview.net/pdf?id=9UIGyJJpay)

- The code will be released after being sorted out. 

**Introduction**

- We propose a novel structure graph encoder, which can address the atom representation bottleneck observed in traditional IPA encoders.

</div>
</div>
</div>


# 🌐 Research Interests

<div style="display: inline-block; width: 45%;" markdown="1">
  
### AI for Science

* Protein & Antibody Design

* AI for Drug Discovery

* Materials discovery & properties prediction

</div>

<div style="display: inline-block; width: 45%;" markdown="1">
  
### Generative Models

* Diffusion models

* Flow-based models

* Equivariant Neural Networks

</div>

# 🏯 Research Experience
## State Key Lab of CAD & CG, Zhejiang University

*Advisors*: Prof. [Chunhua Shen](https://cshen.github.io) & Prof. [Hao Chen](https://stan-haochen.github.io/) *(Oct.2022 - Present)*

* I contributed to a protein project by proposing a novel structure encoder, addressing the atom representation bottleneck observed in traditional IPA encoders. The introduced encoder exhibited superior designability (**67.04%** vs. 53.58%) and diversity (**66.54%** vs. 51.98%) compared to the previous model. In both Inverse Folding and Protein Design tasks, this innovative encoder consistently outperformed its predecessor.

# 📖 Educations
- *2021.09 - 2025.6 (now)*, Zhejiang University, Zhejiang
- *2018.09 - 2021.06*, Urumqi No.1 Senior High School, Xinjiang
