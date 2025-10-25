document.addEventListener('DOMContentLoaded', function() {
  // '이력서 다운로드' 링크를 찾습니다.
  const resumeLink = document.querySelector('a[data-target="https://s44158619-code.github.io/files/resume.pdf"]');

  // 링크를 찾았고, data-target 값이 있다면
  if (resumeLink && resumeLink.dataset.target) {
    // href 값을 data-target 값으로 강제 변경합니다.
    resumeLink.href = resumeLink.dataset.target;
    // (선택사항) 외부 링크임을 명확히 하기 위해 새 탭에서 열리도록 설정
    resumeLink.target = '_blank';
    resumeLink.rel = 'noopener noreferrer';
  }
});