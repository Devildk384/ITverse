"use client"

export function ContactMap() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.96481252713!2d77.326004!3d28.535516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce511b8b6b7e1%3A0x2b8b6b7e1b8b6b7e!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1715707000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Office Location"
      ></iframe>
    </div>
  )
}
