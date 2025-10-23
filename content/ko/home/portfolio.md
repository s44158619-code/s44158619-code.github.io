---
widget: pages # <--- "portfolio"에서 "pages"로 변경했습니다.
title: "프로젝트"
active: true
# headless: true (삭제된 상태 유지)

weight: 20

subtitle: ""

content:
  page_type: project

  filter_default: 0

  filter_button:
    - name: "전체 보기"
      tag: "*"
      image: "portfolio_all.jpg"
    - name: "기술적인 프로젝트"
      tag: "tech-projects"
      image: "portfolio_tech.jpg"
    - name: "생각과 기록"
      tag: "Writings"
      image: "portfolio_write.jpg"
    - name: "리뷰"
      tag: "Reviews"
      image: "portfolio_review.jpg"

design:
  columns: "3"
  view: community/card_horizontal
  flip_alt_rows: true
  background: {}
  spacing: { padding: [0, 30, 0, 30] }
---
