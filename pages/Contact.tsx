
import React, { useState, useEffect } from 'react';
import { Mail, MapPin, PhoneCall, Send, MessageCircle, Clock, Globe, AlertCircle, CheckCircle2, RefreshCcw, Headset, Zap } from 'lucide-react';

interface FormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormFields>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your inquiry details';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be more detailed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (touched.name || touched.email || touched.message) {
      validate();
    }
  }, [formData, touched]);

  const handleBlur = (field: keyof FormFields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true
    });

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({ name: false, email: false, subject: false, message: false });
      }, 1500);
    }
  };

  const getInputClass = (field: keyof FormErrors) => {
    const baseClass = "w-full bg-slate-50 border rounded-[1.2rem] md:rounded-[1.5rem] px-6 py-4 md:px-8 md:py-5 focus:outline-none transition-all duration-300 font-bold text-slate-800 text-base md:text-lg";
    if (touched[field] && errors[field]) {
      return `${baseClass} border-red-500 bg-red-50 focus:border-red-600 focus:ring-8 focus:ring-red-500/10`;
    }
    if (touched[field] && !errors[field] && formData[field as keyof FormFields]) {
      return `${baseClass} border-brand-green bg-emerald-50/30 focus:border-brand-green`;
    }
    return `${baseClass} border-slate-200 focus:border-brand-maroon focus:ring-8 focus:ring-brand-maroon/10`;
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-900 pt-24 md:pt-32 pb-32 md:pb-48 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-maroon-dark/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-slate-50 translate-y-1 clip-path-slant"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter">Let's Connect</h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Contact us for wholesale inquiries, partnerships, or technical support for our animal health products.
          </p>
        </div>
      </section>

      {/* Illustrative Contextual Section 1: Global Reach */}
      <section className="container mx-auto px-4 md:px-6 -mt-24 mb-24 relative z-30">
        <div className="bg-white rounded-[2rem] md:rounded-[4rem] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="p-6 md:p-20 flex flex-col justify-center">
            <div className="flex items-center space-x-3 text-brand-green mb-6">
              <Globe size={28} />
              <span className="font-black uppercase tracking-widest text-xs">Global Strategic Network</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight leading-tight">Worldwide Biotechnology Partnerships</h2>
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-8">
              We coordinate with leading manufacturers across China, Asia, and Europe to ensure the highest quality fertilizers and additives reach the heart of Bangladesh's agriculture.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">12+</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Global Partners</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">35+</span>
                <span className="text-xs font-bold text-slate-400 uppercase">Years Expertise</span>
              </div>
            </div>
          </div>
          <div className="relative bg-brand-maroon/5 h-[400px] lg:h-auto overflow-hidden">
            <img
              src="assets/portfolio/portfolio-6.jpg"
              alt="Global Logistics and Network Map Representation"
              className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-brand-maroon/10 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="pb-24 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              <div className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border border-slate-100 h-full">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 md:mb-10 flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-brand-maroon to-brand-maroon-dark text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-brand-maroon/30">
                    <MessageCircle size={20} md:size={24} />
                  </div>
                  <span>Quick Contact</span>
                </h3>

                <ul className="space-y-8 md:space-y-10">
                  <li className="flex items-start space-x-4 md:space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-maroon group-hover:to-brand-maroon-dark group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-maroon/30">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase tracking-widest text-[9px] md:text-[10px] mb-2">Our Location</h4>
                      <p className="text-slate-800 font-bold leading-relaxed text-base md:text-lg group-hover:text-brand-maroon-dark transition-colors">
                        House-51, Flat: A-6 (6th Floor), Rabindra Sarani Road, Sector-3, Uttara, Dhaka-1230.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 md:space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-maroon group-hover:to-brand-maroon-dark group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-maroon/30">
                      <PhoneCall size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">Call Support</h4>
                      <p className="text-slate-800 font-bold text-xl group-hover:text-brand-maroon-dark transition-colors">+88-02-58951859</p>
                      <p className="text-slate-500 font-bold">01713-011040</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4 md:space-x-6 group cursor-pointer">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-maroon group-hover:to-brand-maroon-dark group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-brand-maroon/30">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px] mb-2">Email Us</h4>
                      <p className="text-slate-800 font-bold text-lg group-hover:text-brand-maroon-dark transition-colors">info@aranimalhealthltd.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 border border-brand-maroon-dark/20 p-6 md:p-12 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl shadow-slate-900/40 text-white h-auto overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-maroon-dark/10 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl"></div>
                <h3 className="text-2xl font-black mb-10 flex items-center space-x-4">
                  <Clock size={28} className="text-brand-gold" />
                  <span>Business Hours</span>
                </h3>
                <ul className="space-y-6">
                  <li className="flex justify-between border-b border-white/10 pb-4">
                    <span className="font-bold text-slate-400">Saturday - Thursday</span>
                    <span className="font-black">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-4">
                    <span className="font-bold text-slate-400">Friday</span>
                    <span className="font-black uppercase tracking-[0.2em] text-brand-gold px-3 py-1 rounded-lg bg-white/5 border border-white/10">Closed</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="bg-white p-10 md:p-24 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-slate-100 text-center animate-in zoom-in fade-in duration-500 h-full flex flex-col items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-brand-maroon/10 text-brand-maroon rounded-full flex items-center justify-center mb-8 shadow-inner border border-brand-maroon/20">
                    <CheckCircle2 size={48} className="animate-bounce text-brand-gold" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Message Sent!</h2>
                  <p className="text-slate-500 text-lg md:text-xl max-w-md mx-auto mb-10 font-medium leading-relaxed">
                    Thank you for reaching out. Our specialist team will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="flex items-center space-x-3 bg-gradient-to-r from-brand-maroon to-brand-maroon-dark hover:from-brand-maroon-dark hover:to-brand-maroon text-white font-black px-8 py-4 md:px-10 md:py-5 rounded-[1.5rem] md:rounded-[2rem] transition-all shadow-xl shadow-brand-maroon/20 active:scale-95"
                  >
                    <RefreshCcw size={20} />
                    <span>Send Another Message</span>
                  </button>
                </div>
              ) : (
                <div className="bg-white p-6 md:p-20 rounded-[2rem] md:rounded-[4rem] shadow-2xl border border-slate-100 relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-maroon/5 -translate-y-1/2 translate-x-1/2 rounded-full"></div>
                  <h2 className="text-2xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6 tracking-tight">Send a Message</h2>
                  <p className="text-slate-500 mb-8 md:mb-12 text-sm md:text-lg font-medium">Fields marked with <span className="text-brand-maroon font-bold">*</span> are mandatory for our team to assist you.</p>

                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Full Name *</label>
                        <div className="relative">
                          <input
                            required
                            type="text"
                            placeholder="Ex: Atiar Rahman"
                            className={getInputClass('name')}
                            value={formData.name}
                            onBlur={() => handleBlur('name')}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Email Address *</label>
                        <div className="relative">
                          <input
                            required
                            type="email"
                            placeholder="rahman@gmail.com"
                            className={getInputClass('email')}
                            value={formData.email}
                            onBlur={() => handleBlur('email')}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Inquiry Subject</label>
                      <input
                        type="text"
                        placeholder="Wholesale Inquiry / Partnership Proposal"
                        className="w-full bg-slate-50 border border-slate-200 rounded-[1.2rem] md:rounded-[1.5rem] px-6 py-4 md:px-8 md:py-5 focus:outline-none focus:border-brand-maroon focus:ring-8 focus:ring-brand-maroon/10 transition-all font-bold text-base md:text-lg"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Message *</label>
                      <div className="relative">
                        <textarea
                          required
                          rows={6}
                          placeholder="How can our biotechnology solutions help your business grow?"
                          className={getInputClass('message')}
                          value={formData.message}
                          onBlur={() => handleBlur('message')}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-maroon to-brand-maroon-dark hover:from-brand-maroon-dark hover:to-brand-maroon text-white font-black py-4 md:py-6 rounded-xl md:rounded-[1.5rem] flex items-center justify-center space-x-4 shadow-2xl shadow-brand-maroon/20 transform active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <RefreshCcw className="animate-spin" size={28} />
                      ) : (
                        <>
                          <span className="text-lg md:text-2xl tracking-tight">Submit Message</span>
                          <Send size={20} md:size={24} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Illustrative Contextual Section 2: Support Rep */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-[2rem] md:rounded-[4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 text-white">
            <div className="relative h-[400px] lg:h-auto">
              <img
                src="assets/portfolio/portfolio-7.jpg"
                alt="Professional Customer Service and Technical Support Illustration"
                className="w-full h-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-brand-maroon/20 backdrop-blur-xl rounded-full flex items-center justify-center animate-pulse">
                  <Headset size={48} className="text-brand-maroon" />
                </div>
              </div>
            </div>
            <div className="p-8 md:p-24 flex flex-col justify-center">
              <div className="flex items-center space-x-3 text-brand-gold mb-6">
                <Headset size={28} />
                <span className="font-black uppercase tracking-widest text-xs">Expert Advisory</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 tracking-tight leading-tight">Dedicated Technical Support Team</h2>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed mb-10">
                Our specialists are available to provide on-site technical advisory, dosage optimization, and animal health diagnostics to ensure your success with AR Animal Health products.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Zap className="text-brand-maroon shrink-0" size={24} />
                  <div>
                    <p className="font-black text-sm">Fast Response</p>
                    <p className="text-slate-500 text-xs">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-brand-maroon shrink-0" size={24} />
                  <div>
                    <p className="font-black text-sm">Certified Pros</p>
                    <p className="text-slate-500 text-xs">Expert Doctors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="h-[400px] md:h-[600px] w-full bg-slate-200 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl relative group border-4 md:border-8 border-white">
            <iframe
              title="AR Animal Health Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.6206110909143!2d90.39530651439071!3d23.86760219020718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4230e6c5687%3A0xbe6a72361efb0bb9!2sRabindra%20Sarani%2C%20Dhaka%201230%2C%20Bangladesh!5e0!3m2!1sen!2sbg!4v1644134617529!5m2!1sen!2sbg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100"
            ></iframe>
            <div className="absolute top-6 left-6 md:top-12 md:left-12 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] max-w-[280px] md:max-w-sm pointer-events-none group-hover:scale-105 transition-transform duration-700 border border-slate-100">
              <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Visit Our Office</h4>
              <p className="text-slate-500 font-bold mb-6">Located in the premium business zone of Uttara Sector-3.</p>
              <div className="flex items-center text-brand-maroon font-black text-sm uppercase tracking-widest">
                <span>Navigate</span>
                <Globe size={18} className="ml-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
