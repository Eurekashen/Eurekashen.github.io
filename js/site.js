/*
 * site.js — renders the data-driven sections of the page from JSON.
 *
 * Data lives in /data/*.json; this script turns each entry into the same
 * markup the page used to carry by hand. To add or edit content, edit the
 * JSON — you should never need to touch HTML here.
 *
 *   data/publications.json -> #publication-content (with category tabs)
 *   data/experience.json   -> #experience-content
 *   data/education.json    -> #education-content
 *   data/service.json      -> #academic-service-content
 *
 * Plain-text fields (author/advisor names, venue, org, dates, link labels,
 * descriptions, service items) are HTML-escaped automatically, so type them
 * literally — e.g. "Computer Science & Biochemistry". The `title` and
 * `abstract` fields are injected as raw HTML, so they may contain markup such
 * as <sup>2</sup> for formatting.
 */
(function () {
  'use strict';

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var TABLE_OPEN =
    '<table style="width:100%;border:0px;border-spacing:0px 10px;' +
    'border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>';
  var TABLE_CLOSE = '</tbody></table>';

  /* ------------------------------- Publications ------------------------------- */

  function renderAuthor(a) {
    var core = esc(a.name);
    if (a.me) {
      core = '<strong>' + core + '</strong>';
    } else if (a.url) {
      core = '<a href="' + esc(a.url) + '">' + core + '</a>';
    }
    if (a.eq) { core += '<sup>*</sup>'; }
    if (a.corr) { core += '<sup>&dagger;</sup>'; }
    return core;
  }

  function renderAuthors(authors) {
    return (authors || []).map(renderAuthor).join(', ');
  }

  // Venue line: published -> bold; under review -> italic label + roman year;
  // no venue -> the year alone (plain).
  function renderVenue(pub) {
    if (!pub.venue) {
      return esc(pub.year);
    }
    var label = esc(pub.venue);
    if (pub.badge) {
      label += ' <span style="color:#d10000;">' + esc(pub.badge) + '</span>';
    }
    if (pub.published) {
      return '<strong><em>' + label + '</em>, ' + esc(pub.year) + '</strong>';
    }
    return '<em>' + label + '</em>, ' + esc(pub.year);
  }

  function renderLinks(links) {
    if (!links || !links.length) { return ''; }
    return links.map(function (l) {
      return '<a href="' + esc(l.url) + '">' + esc(l.label) + '</a>';
    }).join(', ');
  }

  function renderPublication(pub) {
    var award = pub.award
      ? '<br><em><strong><span style="color:#d10000;">' + esc(pub.award) +
        '</span></strong></em>'
      : '';
    var row = pub.featured ? '<tr bgcolor="#ffffd0">' : '<tr>';
    return TABLE_OPEN +
      row +
        '<td style="padding:16px;width:34%;vertical-align:middle">' +
          '<div class="one"><img src="images/' + esc(pub.image) + '" width="250"></div>' +
        '</td>' +
        '<td style="padding:8px;width:80%;vertical-align:middle">' +
          '<span class="papertitle">' + (pub.title || '') + '</span>' +
          '<br>' +
          renderAuthors(pub.authors) +
          '<br>' +
          renderVenue(pub) +
          award +
          '<br>' +
          renderLinks(pub.links) +
          '<p>' + (pub.abstract || '') + '</p>' +
        '</td>' +
      '</tr>' +
    TABLE_CLOSE;
  }

  // "All" ordering: featured first, then year descending, then input order.
  function sortedForAll(pubs) {
    return pubs
      .map(function (p, i) { return { p: p, i: i }; })
      .sort(function (a, b) {
        var af = !!a.p.featured, bf = !!b.p.featured;
        if (af !== bf) { return af ? -1 : 1; }
        if (a.p.year !== b.p.year) { return b.p.year - a.p.year; }
        return a.i - b.i;
      })
      .map(function (x) { return x.p; });
  }

  function initPublications(pubs) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.publication-tab'));
    var contentEl = document.getElementById('publication-content');
    if (!contentEl) { return; }
    var cache = {};

    function htmlFor(category) {
      if (cache[category] == null) {
        var list = category === 'all'
          ? sortedForAll(pubs)
          : pubs.filter(function (p) { return p.category === category; });
        cache[category] = list.map(renderPublication).join('\n');
      }
      return cache[category];
    }

    function loadCategory(category) {
      tabs.forEach(function (tab) {
        var active = tab.dataset.category === category;
        tab.classList.toggle('active', active);
        tab.setAttribute('aria-selected', String(active));
      });
      contentEl.innerHTML = htmlFor(category);
      contentEl.dataset.activeCategory = category;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () { loadCategory(tab.dataset.category); });
    });

    var activeTab = tabs.filter(function (t) { return t.classList.contains('active'); })[0];
    loadCategory(activeTab ? activeTab.dataset.category : 'all');
  }

  /* ------------------------------- Experience -------------------------------- */

  function card(inner) {
    return TABLE_OPEN + '<tr><td>' +
      '<div style="display: flex; align-items: center;">' + inner + '</div>' +
      '</td></tr>' + TABLE_CLOSE;
  }

  function logo(item) {
    return '<img src="images/' + esc(item.logo) + '" alt="Logo" style="' +
      esc(item.logoStyle) + '">';
  }

  function renderAdvisors(advisors) {
    if (!advisors || !advisors.length) { return ''; }
    var list = advisors.map(function (a) {
      var name = a.url ? '<a href="' + esc(a.url) + '">' + esc(a.name) + '</a>' : esc(a.name);
      return (a.prefix ? esc(a.prefix) + ' ' : '') + name;
    }).join(' & ');
    return ', <em>Advisors</em>: ' + list;
  }

  function renderExperience(items) {
    return items.map(function (x) {
      return card(
        logo(x) +
        '<div>' +
          '<h3 style="margin: 0 0 2px 0; line-height: 1.2;">' + esc(x.org) + '</h3>' +
          '<strong>' + esc(x.role) + '</strong><br>' +
          '<em>(' + esc(x.dates) + ')</em>' + renderAdvisors(x.advisors) + '<br>' +
          esc(x.description) +
        '</div>'
      );
    }).join('<br>');
  }

  /* -------------------------------- Education -------------------------------- */

  function renderEducation(items) {
    return items.map(function (x) {
      return card(
        logo(x) +
        '<div>' +
          '<h3 style="margin: 0 0 2px 0; line-height: 1.2;">' + esc(x.degree) + '</h3>' +
          '<em>(' + esc(x.dates) + ')</em><br>' +
          esc(x.description) +
        '</div>'
      );
    }).join('');
  }

  /* --------------------------------- Service --------------------------------- */

  function renderService(items) {
    var lis = items.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('\n');
    return '<ul style="margin: 0; padding-left: 20px; line-height: 1.6;">' + lis + '</ul>';
  }

  /* ----------------------------------- Boot ---------------------------------- */

  function loadJSON(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) { throw new Error('Failed to load ' + url); }
      return r.json();
    });
  }

  function fill(id, html) {
    var el = document.getElementById(id);
    if (el) { el.innerHTML = html; }
  }

  function failure(id, what) {
    var el = document.getElementById(id);
    if (el) {
      el.innerHTML = '<p class="publication-error">Failed to load ' + what +
        '. Please try again later.</p>';
    }
  }

  function boot() {
    loadJSON('data/publications.json')
      .then(initPublications)
      .catch(function (e) { console.error(e); failure('publication-content', 'publications'); });
    loadJSON('data/experience.json')
      .then(function (d) { fill('experience-content', renderExperience(d)); })
      .catch(function (e) { console.error(e); failure('experience-content', 'research experience'); });
    loadJSON('data/education.json')
      .then(function (d) { fill('education-content', renderEducation(d)); })
      .catch(function (e) { console.error(e); failure('education-content', 'education'); });
    loadJSON('data/service.json')
      .then(function (d) { fill('academic-service-content', renderService(d)); })
      .catch(function (e) { console.error(e); failure('academic-service-content', 'academic service'); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
