import {fireEvent, render, screen} from '@testing-library/react';
import { Sidebar } from "./Sidebar"

describe('Sidebar', ()=>{
  test('createComponent',()=>{
    render(<Sidebar/>)
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()
  })

  test('test toggle',()=>{
    render(<Sidebar/>)
    const button = screen.getByTestId('sidebar-toggle')
    const sidebar = screen.getByTestId('sidebar')
    expect(sidebar).toBeInTheDocument()

    fireEvent.click(button)
    expect(sidebar).toHaveClass('collapsed')

    fireEvent.click(button)
    expect(sidebar).not.toHaveClass('collapsed')
  })
})