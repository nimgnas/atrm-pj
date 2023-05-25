# atrm pj

```
"react": "^18.2.0",
"react-responsive": "^9.0.2",
"styled-components": "^5.3.10",
"typescript": "^4.9.5",
```

# 폴더 구조

```
src
├── App.tsx
├── assets
│   ├── icons
│   │   ├── Group.png
│   │   ├── buy.png
│   │   ├── profile.png
│   │   ├── search.png
│   │   └── socialicons.png
│   └── logo.png
├── components
│   ├── Banner.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── MainProduct.tsx
│   ├── Navigation.tsx
│   ├── Product.tsx
│   ├── ProductList.tsx
│   └── ProductListFooter.tsx
├── hooks
│   └── useProgressiveImg.tsx
├── index.tsx
├── json
│   └── products.json
└── styles
    ├── common.ts
    ├── globalStyle.ts
    ├── styled.d.ts
    └── theme.ts
```

# 미리보기⭐️

<img width="100%"  src="https://github.com/nimgnas/atrm-pj/assets/85691654/cb2d6091-0333-453e-a992-7d16b8bca6b4"/>

# 구현기능📝

## 점진적 이미지 로딩

- 기존 이미지의 용량이 높아 렌더링이 지연되는 상황이 발생
- 점진적 로딩을 구현하기 위해 원본 이미지만이 아닌 임시이미지 파일도 JSON으로 전달받음 (임시이미지의 용량은 10kb 이하)
- 원본 이미지의 로딩이 완료되기 전에는 임시이미지의 URL을 반환하고, 로딩 후에는 원본 이미지의 URL을 반환하는 Hooks 구현

## **_결과_**

<span style="font-size:25px">위쪽부터 개선전, 개선후</span>  
<img width="80%"  src="https://github.com/nimgnas/atrm-pj/assets/85691654/2cecfb30-80b0-432b-86be-176c9bd399c4"/>

---

## **_개발자도구 네트워크탭_**

<img wid="100*" src="https://github.com/nimgnas/atrm-pj/assets/85691654/dba98a83-cac3-4743-a7c4-bf520bd41bf3"/> 
<span style="font-size:20px">개선 전에는 큰 용량의 이미지를 처음부터 받아오면서 시간이 오래 걸리는 것을 확인할 수 있습니다.
</span>
<br />
<br />
<br />
<img wid="100*" src="https://github.com/nimgnas/atrm-pj/assets/85691654/5ca6b08b-2ad7-431d-bb56-66a4201a7081"/>

<span style="font-size:20px">개선 후 10kb 이하의 이미지들로 먼저 다운로드 함으로써 빠른 속도로 로딩이 되는 것을 확인할 수 있습니다.
</span>
