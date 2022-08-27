import nodemailer from 'nodemailer'

const opts = {
  host: process.env.smtp_host,
  port: process.env.smtp_port,
  secure: !!parseInt(process.env.smtp_secure),
  auth: {
    user: process.env.smtp_user,
    pass: process.env.smtp_pass
  }
}

const transporter = nodemailer.createTransport(opts)

async function callback(form = {}) {
  const template = `
      Имя: ${form.name} \n
      Эл. почта: ${form.email} \n
      Номер телефона: ${form.phone} \n
      Сообщение: ${form.message} \n
    `
  transporter.sendMail({
    sender: process.env.smtp_user,
    from: `Сервис Ханса-Мебель <${process.env.smtp_user}>`,
    to: 'Andy <st8prisoner@gmail.com>',
    subject: 'Заказать звонок',
    text: template
  }).then(console.log)
}

async function subscribe(email) {
  const template = `
    Эл. почта: ${email}
  `

  transporter.sendMail({
    sender: process.env.smtp_user,
    from: `Сервис Ханса-Мебель <${process.env.smtp_user}>`,
    to: 'Andy <st8prisoner@gmail.com>',
    subject: 'Подписаться на новости',
    text: template
  }).then(console.log)

}

export { callback, subscribe }