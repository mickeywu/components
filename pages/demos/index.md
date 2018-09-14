# MergeBox

```.jsx
<FlexContainer alignItems="start">
  <MergeStatus state="ready" />
  <PointerBox ml={3} caret="left-top">
    <MergeDetail state="ready" />
    <MergeActions
      state="ready"
      numCommits={40}
      desktopUrl="https://github.com/primer/primer-react"
      onClick={() => console.log('clicked')}
    />
  </PointerBox>
</FlexContainer>
```