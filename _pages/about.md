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

I am currently a senior undergraduate student from [Mixed Class, Chu Kochen Honors College](http://ckc.zju.edu.cn/ckcen/) of [Zhejiang University](https://www.zju.edu.cn/english/), majoring in Computer Science and Technology. My advisors are professor [Chunhua Shen](https://cshen.github.io/) and [Hao Chen](https://stan-haochen.github.io/) who are affiliated to [State Key Lab of CAD & CG, Zhejiang University](http://www.cad.zju.edu.cn/english.html). I had a wonderful research experience at [University of Illinois at Urbana-Champaign](https://illinois.edu/) and was honored to work with [Prof. Ge Liu](https://www.mit.edu/~geliu/)

I will join Carnegie Mellon University as a Ph.D. student in 2025 Fall.

I am keenly interested in research topics associated with AI for Science and various Generative Models. My prior research experience encompasses protein design and the prediction of crystal structures and properties. Currently, I am engaged in exploring diverse areas, including co-designing protein structures and sequences, utilizing Reinforment Learning to guide Flow Matching models to design protein structures.

<!-- <span style="color: red;">I am looking for PhD position for Fall 2025 intake, if you have any clues please feel free to contact me.</span> -->

# 🔥 News

- *2025.01*: &nbsp;🎉🎉 One paper has been accepted by ICLR 2025, see you in Singapore.
- *2024.12*: &nbsp;🎉🎉 One paper has been accepted by AAAI 2025.
- *2024.06*: &nbsp;🎉🎉 One paper has been accepted by ICML 2024 AI for Science Workshop.
- *2024.05*: &nbsp;🎉🎉 One paper has been accepted by ICML 2024.
- *2024.01*: &nbsp;🎉🎉 The first paper I participated in was accepted by ICLR 2024. 

# 📝 Publications 

<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025 AISI</div><img src='images/aisi.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**A Denoising Pre-training Framework for Accelerating Novel Material Discovery**

**Shuaike Shen**, Ke Liu, Hao Chen<sup>†</sup>

[**AAAI 2025 AISI**]()

</div>
</div>
</div>

<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review</div><img src='images/rl_2.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Training Text-to-Image Flow Models on Self-Generated Data**

Jiajun Fan, **Shuaike Shen**, Chaoran Cheng, Chumeng Liang, Ge Liu<sup>†</sup>


</div>
</div>
</div>

<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='images/rl_1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Online Reward-Weighted Fine-Tuning of Flow Matching with Wasserstein Regularization**

Jiajun Fan, **Shuaike Shen**, Chaoran Cheng, Yuxin Chen, Chumeng Liang, Ge Liu<sup>†</sup>

***Under review***


</div>
</div>
</div>

<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review</div><img src='images/rifold.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Rethinking Biomolecule Inverse Folding via Evaluation Metrics and Decoding Paradigms**

Ke Liu, Weian Mao, **Shuaike Shen**, Zheng Sun, Bin Xiao, Hao Chen, Lin Yuanbo Wu, Chunhua Shen<sup>†</sup>

***Under review***


</div>
</div>
</div>

<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under review</div><img src='images/cebind.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Physics-Informed Neural Networks for Unsupervised Binding Energy Prediction**

Ke Liu<sup>*</sup>, **Shuaike Shen**<sup>*</sup>, Hao Chen<sup>†</sup>

***Under review***


</div>
</div>
</div>

<!-- FADiff -->
<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='images/fadiff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Floating Anchor Diffusion Model for Multi-motif Scaffolding**

Ke Liu<sup>*</sup>, **Shuaike Shen**<sup>*</sup>, Weian Mao<sup>*</sup>, Xiaoran Jiao, Zheng Sun, Hao Chen<sup>†</sup>, Chunhua Shen<sup>†</sup>

[**\[Project Page\]**](https://AI4Mol.github.io/projects/FADiff/) [**\[Code\]**](https://github.com/AI4MOL/FADiff) [**\[Paper\]**](https://arxiv.org/abs/2406.03141) 

**Introduction**

- A method to scaffold *multiple protein functional motifs without prior knowledge*. FADiff is based on a diffusion process which is modified to take into account the movement of the single motifs as **independent rigid bodies**.

</div>
</div>
</div>

<!-- DPF -->
<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024 AI for Science Workshop</div><img src='images/DPF.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**Boost Your Crystal Model with Denoising Pre-training**

**Shuaike Shen**<sup>*</sup>, Ke Liu<sup>*</sup>, Muzhi Zhu, Hao Chen<sup>†</sup>

[**\[Project Page\]**](https://AI4Mol.github.io/projects/DPF/)

[**\[Paper\]**](https://openreview.net/forum?id=u2qYzRRg02)

**Introduction**

- A universal pre-training framework based on denoising can enhance the model's ability to model crystal structures and can be migrated to any specific crystal feature extraction network.

</div>
</div>
</div>

<!-- VFN -->
<!-- ################################################################################## -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2024 spotlight</div><img src='images/vfn.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
<div class='paper-intro' markdown="1">

**De novo Protein Design Using Geometric Vector Field Networks**

Weian Mao<sup>\*</sup>, Zheng Sun<sup>\*</sup>, Muzhi Zhu<sup>\*</sup>, **Shuaike Shen**, Lin Yuanbo Wu, Hao Chen<sup>†</sup>, Chunhua Shen<sup>†</sup>

[**\[Code\]**](https://github.com/aim-uofa/VFN) [**\[Project Page\]**](https://bioai-nexus.github.io/projects/VFN/) [**\[Paper\]**](https://openreview.net/pdf?id=9UIGyJJpay)

<!-- - The code will be released after being sorted out.  -->

**Introduction**

- We propose a novel structure graph encoder, which can address the atom representation bottleneck observed in traditional IPA encoders.

</div>
</div>
</div>


# 🌐 Research Interests

<div style="display: inline-block; width: 45%;" markdown="1">
  
### AI for Science

* Biomolecules Design

* Materials

</div>

<div style="display: inline-block; width: 45%;" markdown="1">
  
### Generative Models

* Diffusion models

* Flow Matching

</div>

# 🏯 Research Experience

<!-- ## AI for Science Center, Shanghai AI Lab, Shanghai, China

**Research Intern**

*(Mar.2025 - Jul.2025)*  *Advisors*: Dr. [Biqing Qi](https://biqing-qi.github.io/)

Working on Specialized Generalist driven AI4S and emboddied Applications -->

<!-- <div style="display: flex; align-items: center;">
    <img src="images/pjlab_logo.jpeg" alt="Logo" style="width: 70px; height: 70px; margin-right: 30px;">
    <div>
        <h2>AI for Science Center, Shanghai AI Lab, Shanghai, China</h2>
        <strong>Research Intern</strong><br>
        <em>(Mar.2025 - Jul.2025)</em>, <em>Advisors</em>: Dr. <a href="https://biqing-qi.github.io/">Biqing Qi</a><br>
        Working on Specialized Generalist driven AI4S and embodied Applications.
        <br>
    </div>
</div> -->



<!-- ## Computer Science & Biochemistry, University of Illinois at Urbana-Champaign, Urbana, U.S.

**Research Intern**

*(May.2024 - Mar.2025)*, *Advisors*: Prof. [Ge Liu](https://www.mit.edu/~geliu/) & Prof. [Nicholas Ching Hai Wu](https://experts.illinois.edu/en/persons/nicholas-ching-hai-wu) 

Working on protein co-design and developing online Reinforcement Learning algorithm for Flow Matching models. -->


<div style="display: flex; align-items: center;">
    <img src="images/uiuc_logo.png" alt="Logo" style="width: 70px; height: 70px; margin-right: 30px;">
    <div>
        <h2>Computer Science & Biochemistry, University of Illinois at Urbana-Champaign, Urbana, U.S.</h2>
        <strong>Research Intern</strong><br>
        <em>(May.2024 - Mar.2025)</em>, <em>Advisors</em>: Prof. <a href="https://www.mit.edu/~geliu/">Ge Liu</a> & Prof. <a href="https://experts.illinois.edu/en/persons/nicholas-ching-hai-wu">Nicholas Ching Hai Wu</a><br>
        Working on protein co-design and developing online Reinforcement Learning algorithm for Flow Matching models.
    </div>
</div>


<!-- * Protein sequence and structure co-design.

* Develop online Reinforcement Learning algorithm for Flow Matching models. -->


<!-- ## State Key Lab of CAD & CG, Zhejiang University, Hangzhou, China

**Undergraduate Research Assistant**

*(Oct.2022 - May.2024)*, *Advisors*: Prof. [Chunhua Shen](https://cshen.github.io) & Prof. [Hao Chen](https://stan-haochen.github.io/) 

Working on protein design, Biomolecules interaction and Material science. -->

<div style="display: flex; align-items: center;">
    <img src="images/zju_logo.png" alt="Logo" style="width: 70px; height: 70px; margin-right: 30px;">
    <div>
        <h2>State Key Lab of CAD & CG, Zhejiang University, Hangzhou, China</h2>
        <strong>Undergraduate Research Assistant</strong><br>
        <em>(Oct.2022 - May.2024)</em>, <em>Advisors</em>: Prof. <a href="https://cshen.github.io">Chunhua Shen</a> & Prof. <a href="https://stan-haochen.github.io/">Hao Chen</a><br>
        Working on protein design, Biomolecules interaction and Material science.
    </div>
</div>




<!-- * Contributed to the [**VFN**](https://bioai-nexus.github.io/projects/VFN/) project, addressing the atom representation bottleneck observed in traditional IPA encoders. 

* Fully participated in the [**FADiff**](https:/ai4mol.github.io/projects/FADiff/) project and solved the multi motif scaffolding problem.

* Proposed a Pre-training framework and Period Injection Module that can enhance crystal modeling capabilities

* Purpose CEBind, an unsupervised binding energy prediction model.

* Design RiFold, a RNA inverse folding model outperforms previous baseline models. -->



# 📖 Educations

* ## Zhejiang University

    Sep. 2021 - Jun. 2025(expected)

    B.E. in Computer Science and Technology, Chu Kochen Honors College
