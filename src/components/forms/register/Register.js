import React from "react";
import { Col, Row, Form, Input, Button, Select ,Space} from "antd";
import "./register.css";
const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
};
const style = {
  top: "100px",
  color:"red"
};

class Register extends React.Component {

  handlClick =()=>{
   
  }
  render() {
    return (
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="main">
            
            <Form autoComplete="off"
              style={{ marginTop: style.top }}
              {...layout}
              ref={this.formRef}
              name="control-ref"
              onFinish={this.onFinish}
            >
             <span className="spn">(*) Champs Obligatoire</span>
              <Form.Item 
                name="Prenom"
                label="Prenom"
                rules={[{ required: true ,message:'Prenom Obligatoire',whitespace:false}]}
              >
                <Input className="ant-inpu" />
              </Form.Item>
              <Form.Item name="Nom" label="Nom" rules={[{ required: true ,message:'Nom Obligatoire',}]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="Email"
                label="Email"
                rules={[{ required: true,message:'Email Obligatoire',type:'email' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="CEmail"
                label="Confirmation Email"
                rules={[{
                  type:'email',
                  required: true,
                  message: 'Confiramtion Email Obligatoire',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('Email') === value) {
                      return Promise.resolve();
                    }
      
                    return Promise.reject('Not Match ');
                  },
                }),]}
              >
              
                <Input />
               
              </Form.Item>

              <Form.Item
                name="civilite"
                label="Civilte"
                rules={[{ required: true ,message:'Civilite Obligatoire',}]}
              >
                <Select placeholder="Civilite">
                  <Option value="Monsieur">Monsieur</Option>
                  <Option value="Madame">Madame</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="entre"
                label="* Vous représentez ?:"
                rules={[{ required: true ,message:'Champ Obligatoire'}]}
              >
                <Select
                  placeholder="Vous représentez ?"
                  onChange={this.onGenderChange}
                  allowClear
                >
                  <Option value="1">Entreprise</Option>
                  <Option value="0">Cabinet conseil</Option>
                </Select>
              </Form.Item>
              <Form.Item
                noStyle
                shouldUpdate={(prevValues, currentValues) =>
                  prevValues.entre !== currentValues.entre
                }
              >
                {({ getFieldValue }) => {
                  if (getFieldValue("entre") === "1") {
                    return (
                      <div>
                        <Form.Item
                          name="cnss"
                          
                          label="N° CNSS"
                          rules={[{ required: true , messag:"Cnss Obligatoire",type:"number",}]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item 
                          name="ccnss"
                          label="Confirmation N° CNSS"
                          rules={[{
                            required: true,
                            type:"number",
                            message: 'Confirmation N° Cnss Obligatoire',
                          },
                          ({ getFieldValue }) => ({
                            validator(rule, value) {
                              if (!value || getFieldValue('cnss') === value) {
                                return Promise.resolve();
                              }
                
                              return Promise.reject('N° CNSS Not match');
                            },
                          }),]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="rsociale"
                          label="Raison sociale"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    );
                  } else if (getFieldValue("entre") === "0") {
                    return (
                      <div>
                        <Form.Item
                          name="adaddad"
                          label="adadadad"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                      </div>
                    );
                  } else return null;
                }}
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Space size={20}>
                <Button size="large"  shape="round" type="primary" htmlType="submit">
                  Enregister
                </Button>
                <Button type="danger"  onClick={this.handlClick} shape="round" size="large" htmlType="reset">Réinitialiser</Button>
                </Space>
              </Form.Item>
            </Form>
          </Col>
          <Col span={2}> </Col>
        </Row>
      </div>
    );
  }
}

export default Register;
