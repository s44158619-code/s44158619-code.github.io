document.addEventListener('DOMContentLoaded', function() {
  // href 속성이 '/ko/files/resume.pdf' 인 링크를 직접 찾습니다.
  const resumeLink = document.querySelector('a[href="/ko/files/resume.pdf"]');

  // 링크를 찾았고, data-target 값이 있다면
  if (resumeLink && resumeLink.dataset.target) {
    // href 값을 data-target 값으로 강제 변경합니다.
    resumeLink.href = resumeLink.dataset.target;
    // 새 탭에서 열리도록 설정
    resumeLink.target = '_blank';
    resumeLink.rel = 'noopener noreferrer';
  }
});