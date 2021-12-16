<div align="center">
 

  <h1>JEKYLL YAT THEME</h1>

</div>

## 블로그 제작 과정
 
 
### 블로그 제작 과정과 시행착오
  
  원격저장소 복제를 통해 `github`에 업로드 해본 것은 이번이 처음이 아니라 전에 해본 것이라 수월하게 적용할 수 있었지만, 블로그를 만들때 사용했던 지킬, 루비가 발목을 잡았던 것 같다.
  처음 강의를 해주신 분(강사님이라고 부르겠습니다.)의 진행과 같게 `vscode` 상에서 실습을 진행하였는데, `git`을 다루는 간단한 명령어를 소개하고 그 명령어의 동작을 보여주는 것엔 문제가 없었다.<br>
 후에 지킬을 다운하는 지점부터 조금 차이가 생겨났는데 그 점은 강사님의 환경은 Mac환경이였고, 내 환경은 Window 환경이였다. Window 환경에서는 따로  `Ruby + Devki`을 설치하여야 한다고 하고 추후 진행이 되었는데, 저것을 다 다운하고 `vscode`의 `Powershell` 환경에서 진행을 해보았지만, `gem` 명령어가 사용이 되지 않는 환경이여서 할 수 없었고 이를 해결하기 위해 구글링을 통해 우분투 쉘 환경을 다운해서 해결해 보려 하였다. 하지만 설치한 Ruby의 파일이 디렉토리의 안에 없다는 오류가 발생했고 우분투 터미널 창이 익숙하지 못한 탓에 또 다시 `gem` 명령어를 사용할 수 없었다.<br> 
이번엔 구글링이 아닌 `vscode` 상의 여러가지를 혼자 뒤져보며 해결책을 찾아보았는데 그 중 해결책을 찾은 것은 Git Bash 터미널을 사용하는 것이였다. 여기선` gem` 명령어가 사용이 가능했고 그에 따라 다음 진행을 완료하였다.<br>
`jekyll`도 그 환경에서 잘 작동해 `jekyll new . --force`를 통해 베이스가 되는 것들을 생성하고 `bundle add webrick`으로 `Ruby`의 버전이 달라 설치되지 않은 패키지를 설치해` bundle exec jekyll serve`를 통해 기본테마를 가진 로컬 환경 웹사이트를 작동하는데 성공하였다. 이제 블로그의 밋밋함을 해결하기 위해 테마를 적용하기로 했는데 테마가 매우 다양한 것들이 있어서 처음엔 가장 마음에 드는 테마인 `Flexible-Jekyll`을 적용하려 하였다. 이 테마가 담긴` github repository`에서 파일들을 다운한 후 내 폴더에 덮어씌워 사용하도록 하였는데 이 테마를 적용할 때 오류가 발생했었다. `minima theme`가 없어서 동작하지 않는 오류였는데 그 당시에는 오류를 제대로 보지 않고 다른 테마를 선택했지만, 아마 덮어쓰기가 테마를 적용하는 파일과 겹치지 않아 덮어쓰기가 되지 않았고 그로인해 내가 다운한 테마는 적용되지 않았으나 `config.yml` 파일은 바뀌어 있어 그러한 오류가 발생하지 않았을까 라는 생각이 든다. 현재 적용한 테마는 JEKYLL YAT THEME로 다크모드, 카테고리별 분류, 변역 등의 다양한 기능을 제공하는 테마였다.<br>
그 후 몇개의 포스트를 생성해두고 댓글 기능을 추가하기 위해 강사님이 진행하신 `disqus`를 통한 과정을 모두 진행하였는데 여기서 또 차이점이 발생했다.
  
    {%- if comments -%}
    <div id="disqus_thread"></div>
    <script>
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://jun-kookmin-4.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
    </script>
    <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
    
   이란 부분을 추가하는 것이였는데 나의 post.html의 어떤 부분에 이것을 추가하여도 댓글 기능이 활성화 되지 않았고, 이를 해결하기 위해 config.yml에서 
   `disqus:`와 `shortname:`에 주석처리가 되어있었는데, 주석을 지우고 `shortname:`에 나의 `shrtname`인 `jun-kookmin-4`을 추가하자 정상적으로 댓글 기능이 활성화 되었다. 이후에 위 코드를 지    우고 다시 로컬환경에서 실행을 해보았을 때 저 코드가 없어도 댓글 기능이 활성화 되는 것으로 보아 테마에 이미 내장되어 있는 기능이라는 점을 확인 할 수 있었다.
   하지만 댓글을 달기 위해선 `disqus`에서 이메일 인증을 해야하는데 이 이메일 인증을 할 때 날라오는 'disqus'의 메일의 링크가 문제가 있다는 것이 발견되었고 구글링을 통해 메일의 링크의 일부를      디코딩해 댓글을 달 수 있게 되었다.<br>
   마지막으로 파비콘과 배너를 수정하였는데 파비콘은 구글에서 원하는 이미지를 사용하였는데 대부분의 이미지는 네모난 모양여서 그대로 적용하면 네모 그대로 보이는 문제가 있었고, 포토샵을 사용하여    간단하게 원 모양으로 잘라 원 이외의 배경은 투명하게 만들고 이미지를 `favicon: "maxresdefault.gif"`을 통해 적용해 변경하였고. 배너는 `banner: "kookminwinter.gif"` 로 적용하였다.<br>
   이로써 블로그를 전부 완성하였고 추후 내 학습, 학업 내용을 기록해도 될만한 블로그라고 생각이 들었고 앞으로의 과정을 조금씩 기록해 볼 계획이다.
  
  
