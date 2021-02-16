# **ng-bubble-input**


1. [Demo](#demo)
2. [Usage](#usage)
3. [Styles](#styles)
4. [Events](#events)

## **Demo**

https://stackblitz.com/edit/ng-bubble-input?devtoolsheight=33&file=src/app/app.module.ts

## **Usage**

![Bubble input example image](https://github.com/borisadamyan/liberies/blob/master/src/assets/images/bubble-input.png?raw=true)

```angular2html
<div style="width: 250px">
  <ng-bubble-input></ng-bubble-input>
</div>
```
### Add NgBubbleInputModule in  app.module.ts
```typescript
import { NgBubbleInputModule } from 'ng-bubble-input';

@NgModule({
  imports:[ 
    ...,
    NgBubbleInputModule],
    ...
})
```

## **Styles**

```scss
::ng-deep.ng-bubble-input-box{
' rewrite styles'
  .ng-bubble-item{
    'rewrite styles'
    .ng-bubble-remove{
      'rewrite styles'
    }
  }
  .ng-bubble-input{
    'rewrite styles'
  }
}


### You can use you custom class name for styling bubble-input

```angular2html
<div style="width: 250px">
  <ng-bubble-input 
    [defaultClass]="'my-custom-class'">
  </ng-bubble-input>
</div>
```

```scss
::ng-deep.my-custom-class{
'some custom styles'
  .ng-bubble-item{
    'some custom styles'
    .ng-bubble-remove{
      'some custom styles'
    }
  }
  .ng-bubble-input{
    'some custom styles'
  }
}
```

**[⬆ back to top](#ng-bubble-input)**

## **Events**

```angular2html
<div style="width: 250px">
  <ng-bubble-input
    (change)="onChange(event)"
    (delete)="onDelete(event)">
  </ng-bubble-input>
</div>
```

```typescript
onChange(list) {
  console.log(list);
}

onChange(list) {
  console.log(list);
}
```

#### Output value
// array of strings  - ['I'm', 'bubble', 'input']



**[⬆ back to top](#ng-bubble-input)**
