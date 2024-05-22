import { Button } from "antd"

export const HeroBanner = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to Our Shop!</h1>
                    <p className="hero-subtitle">Discover our latest products and start shopping.</p>
                    <Button type="primary"  className="hero-button">Shop Now</Button>
                </div>
            </section>
          </div>
     )
  }