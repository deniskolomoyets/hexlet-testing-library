import '@hexlet/tic-tac-toe/public/style.css'
import { test, expect } from 'vitest'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'
import { debug } from 'vitest-preview';


// Импортируем игру
import { TicTacToe } from '@hexlet/tic-tac-toe'

test('main', async () => {
  // Объект для выполнения действий над элементами
  const user = userEvent.setup()

  // Заполняем document.body
  // Игра "разворачивает" себя в переданный элемент
  // Вызов метода start вешает обработчики
  const game = new TicTacToe(document.body)
  game.start()
  debug()


  // Выбираем нужные элементы
  // Находим поля для ввода имен игроков
  const input1 = screen.getByLabelText('Player 1')
  const input2 = screen.getByLabelText('Player 2')

  // Выполняем необходимые действия
  // Вводим имена пользователей
  await user.type(input1, 'user 1')
  await user.type(input2, 'user 2')

  // Отправляем форму
  const submitButton = screen.getByText('Start Game')
  await user.click(submitButton)
  debug()
  // Проверяем результат
  expect(document.body).toHaveTextContent('user 1, you are up!')

})