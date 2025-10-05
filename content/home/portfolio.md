---
# A section created with the Portfolio widget.
# This section displays content from `content/project/`.
# See https://docs.hugoblox.com/widget/portfolio/
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: "프로젝트"
subtitle: "제가 진행한 프로젝트, 감상문 및 개인 기록 모음"

content:
  # Page type to display. E.g. project.
  page_type: project

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
    - name: "전체 보기"
      tag: "*"
    - name: "CLI 계산기"
      tag: "CLI"
    - name: "Git 자동화 스크립트"
      tag: "Automation"
    - name: "개인 포트폴리오 웹사이트"
      tag: "Web"
    - name: "역행자 감상문"
      tag: "Book1"
    - name: "원씽 감상문"
      tag: "Book2"
    - name: "나의 버킷리스트"
      tag: "Goal"
    - name: "내가 좋아하는 명언"
      tag: "Motivation"
    - name: "백준 활동 기록"
      tag: "Baekjoon"
    - name: "좋은 글귀 모음"
      tag: "Quotes"

design:
  columns: "3"
  view: card
  flip_alt_rows: true
  background: {}
  spacing: { padding: [0, 0, 0, 0] }
---
