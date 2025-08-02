import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { CountView } from "."


describe("画面のテスト", () => {
  test("画面のテスト", async () => {
    const { container } = render(<CountView />)
    expect(container).toHaveTextContent("カウントアップ")
  })
})