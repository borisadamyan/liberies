# ng-bubble-input


1. [Usage](#usage)
2. [Styles](#styles)
3. [Events](#functions)

## **Usage**

![Bubble input example image](https://github.com/borisadamyan/liberies/blob/master/src/assets/images/bubble-input.png?raw=true)

```angular2html
<div style="width: 250px">
  <ng-bubble-input></ng-bubble-input>
</div>
```


## **Styles**

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

**[⬆ back to top](#table-of-contents)**

## **Events**

```angular2html
<div style="width: 250px">
  <ng-bubble-input
    (change)="onChange(event)"
    (delete)="onDelete(event)">
  </ng-bubble-input>
</div>
```

#### Output value
// array of strings  - ['I'm','bubble','input']



**[⬆ back to top](#table-of-contents)**
