import { Divider, Row, Card, Rate, Col } from 'antd';
import './rate.css'
const Rating = () => {
    
    return (
        <div>
            <section className="customer-reviews">
                    <Divider orientation="left"><h2>Customer Reviews</h2></Divider>
                    <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} lg={8}>
                        <Card className="review-card">
                        <Rate disabled defaultValue={4} className="review-rate" />
                        <p className="review-text">
                            "Great products and fast shipping. Will buy again!"
                        </p>
                        <p className="review-author">- John Doe</p>
                        </Card>
                    </Col>
                    {/* Add more Col components for more reviews */}
                    </Row>
            </section>
        </div>
    )
}
export default Rating