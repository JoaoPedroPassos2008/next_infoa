import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export default function Noticia() {
    return (
        <Container>
            <Row>
                <Col xs={{ span: 6, offset: 3 }}>
            <Form>
                <Form.Group className="mb-3" controlId="titulonoticia">
                    <Form.Label>Titulo da Noticia</Form.Label>
                    <Form.Control type="text" className='bg-warning-subtle' placeholder="Informe o Titulo da Noticia" />
                    <Form.Text className="text-muted">
                        Informe de forma clara o titulo da noticia.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="conteudonoticia">
                    <Form.Label>Informe a Noticia</Form.Label>
                    <Form.Control as="textarea" rows={3} className='bg-warning-subtle' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="tiponoticia" >
                    <Form.Select aria-label="Selecione o tipo de noticia">
                        <option>Selecione o tipo da Noticia</option>
                        <option value="1">Ciência</option>
                        <option value="2">Educação</option>
                        <option value="3">Pesquisa</option>
                        <option value="4">Esportes</option>
                        <option value="5">Cultura</option>
                        <option value="6">Entreterimento</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Col>
              </Row>
        </Container>
    );
}