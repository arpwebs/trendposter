# Pin npm packages by running ./bin/importmap

# Rails 8 uses ESM for JavaScript modules by default
pin "application", preload: true
pin "@hotwired/turbo", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true

# Custom JavaScript modules
pin "mobile-menu", preload: true
pin "demo-carousel", preload: true
pin "faq-accordion", preload: true
pin "flash-messages", preload: true
pin "form-validation", preload: true