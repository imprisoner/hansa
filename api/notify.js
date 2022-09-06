// import nodemailer from 'nodemailer'
const nodemailer = require('nodemailer')

const opts = {
  host: process.env.smtp_host,
  port: process.env.smtp_port,
  secure: !!parseInt(process.env.smtp_secure),
  auth: {
    user: process.env.smtp_user,
    pass: process.env.smtp_pass
  }
}

const mailingList = process.env.smtp_inbox.split(',').map(email => `<${email}>`).join(',')

const transporter = nodemailer.createTransport(opts)

async function callback(form = {}) {
  const template = `
      Имя: ${form.name} \n
      Эл. почта: ${form.email} \n
      Номер телефона: ${form.phone} \n
      Сообщение: ${form.message} \n
    `
  await transporter.sendMail({
    sender: process.env.smtp_user,
    from: `Сервис Ханса-Мебель <${opts.auth.user}>`,
    to: mailingList,
    subject: 'Перезвоните клиенту',
    text: template
  })
}

async function subscribe({email}) {
  const template = `
    Эл. почта: ${email}
  `

  await transporter.sendMail({
    sender: process.env.smtp_user,
    from: `Сервис Ханса-Мебель <${opts.auth.user}>`,
    to: mailingList,
    subject: 'Подписка на рассылку',
    text: template
  })

}

module.exports = { callback, subscribe }