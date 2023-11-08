import { classNames } from "./classNames"

describe('classNames', ()=>{
  test('Only string class', ()=>{
    expect(classNames('someClass')).toBe('someClass')
  })

  test('With aditional class', ()=>{
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {} ,['class1', 'class2'])).toBe(expected)
  })

  test('With mods class true', ()=>{
    const expected = 'someClass class1 class2 hover disable'
    expect(classNames('someClass', {hover: true, disable: true} ,['class1', 'class2'])).toBe(expected)
  })

  test('With mods class true/false', ()=>{
    const expected = 'someClass class1 class2 hover'
    expect(classNames('someClass', {hover: true, disable: false} ,['class1', 'class2'])).toBe(expected)
  })

})