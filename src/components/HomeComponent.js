import React, { useState, useEffect } from 'react';
import { 
    Jumbotron, 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
    Container,
    Row,
    Col, 
    TabContent, 
    TabPane,
} from 'reactstrap';
import classnames from 'classnames';


const Media = () => {
    
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1'})}
                        onClick={() => { toggle('1') }}
                    >
                        Picture by @天蛙
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                     className={classnames({ active: activeTab === '2'})}
                     onClick={() => { toggle('2') }}
                    >
                        Music Shared
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} id="mediaDiv">
                <TabPane tabId="1" >
                    <Row>
                        <Col>
                        <div>
                            <img src="/img/pic0729.jpg" id="TJPic" className="mt-2" alt="Picture by @天蛙"  />
                        </div>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/S9gHS2iARxE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </TabPane>
            </TabContent>
        </>
    )
}

const Content = () => {
    return (
        <>
            <p><span class="float-right"><a href="https://mp.weixin.qq.com/s/4SxMKco8TrOs-ONMhUTzSg" class="badge badge-success">Follow us on WeChat</a></span></p><br />
            <h2>7月29日分享：怎么能看见神的荣耀</h2>
            <p class="font-weight-light align-middle"><span class="badge badge-secondary text-wrap">Original</span> 天力  The WTL </p>
            <div id="contentDiv">
            <p className="text-primary">“耶稣说：’我不是对你说过，你若信，就必看见神的荣耀吗？’” – 约翰福音11：40</p>

            <p>
            马大和玛丽亚一家和耶稣的关系非常好，她们对耶稣有信心。但她们的信心有时候也会打折扣，因为她们对耶稣的认识<span className="text-warning font-weight-bold">还不够全面</span>。
            </p>
            <p>
            耶稣通过让她们的兄弟拉撒路从死里复活这件事来<span className="text-warning font-weight-bold">坚定</span>她们的信心。
            </p>
            <p>
            约翰福音记载着这么一个小故事。有一天，拉撒路病得很重，快不行了。马大、玛丽亚姐妹俩慌忙找人去告诉耶稣，想让耶稣赶紧过来给他医病，让她们的兄弟不要死。
            </p>
            <p>
            她们听过、也见过耶稣行的神迹，耶稣能医病、赶鬼，能把水变成酒。所以她们的<span className="text-warning font-weight-bold">信心是</span>耶稣可以医治病人，让人不死。
            </p>
            <p>
            耶稣到的时候，<span className="text-warning font-weight-bold">拉撒路已经死了4天了</span>。马大见到耶稣的第一句话就是：“主啊，你若早在这里，我兄弟必不死。“ 这是她的信心。接着马大又说：”就是现在，我也知道，你无论向神求什么，神也必赐给你。” 
            </p>
            <p>
            这说明马大相信耶稣可以做更大的事，但那更大的事是什么，她自己也不是很清楚。耶稣回答马大说：“你兄弟必然复活。” 耶稣是说我有能力现在让拉撒路从死里复活。
            </p>
            <p>
            但马大对耶稣没有这个信心，就说：“我知道在末日复活的时候，他必复活。” 潜台词就是，神将来会让人复活，但耶稣现在不能。
            </p>
            <p>
            耶稣就说：“复活在我，生命也在我。信我的人，虽然死了，也必复活；凡活着信我的人必永远不死。<span className="text-warning font-weight-bold">你信这话吗？”</span>
            </p>
            <p>
            耶稣说他就是复活，不仅将来可以让死人复活，现在就可以让死人复活。
            </p>
            <p>
            马大说：“主啊，是的，我信你是基督，是神的儿子，就是那要临到世界的。” 
            </p>
            <p>
            马大说她信。<span className="text-warning font-weight-bold">她真的信了吗？</span>
            </p>
            <p>
            当耶稣让人把墓门打开的时候，马大如果真的相信耶稣能让拉撒路从死里复活的话，会很积极快速的执行，但马大用一句婉转的话表达了她的不信。
            </p>
            <p>
            她说：“主啊，他现在必是臭了，因为他死了已经四天了。” 什么意思？他的尸体都臭了，不可能复活了，主啊，就不必麻烦了。
            </p>
            <p>
            耶稣知道她的信心在哪，就略带责备的说：“我不是对你说过，你若信，就必看见神的荣耀吗？” 耶稣的这句话，不只是对马大说的，也是对他的门徒说的。
            </p>
            <p>
            马大他们见到了拉撒路的复活，信心也大大的增加。
            </p>
            <p>
            耶稣的这句话今天也是对我们说的。你的信心在哪里呢？相信耶稣能帮助我们，改掉坏脾气？帮助找工作？医治疾病？更大的神迹？
            </p>
            <p>
            <strong>愿你有足够的信心，能看见神的荣耀！</strong>
            </p>
            <p className="text-primary">
            这是我今天的祷告：“主啊，赐我更大的信心，看见你的荣耀！奉主耶稣的名祷告，阿们！”
            </p>

        </div>
        </>
    )
}

const MainSection = () => {
    return (
    <>
        <Container>
            <Row>
                <Col xs="12" sm="6" >
                    <Media />
                </Col>
                <Col xs="12" sm="6">
                    <Content />
                </Col>
            </Row>
        </Container>
    </>
    )
}

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        const picHeight = document.getElementById('TJPic').offsetHeight;

    })

    return (
        <>
            <Navbar color="dark" expand="md" className="sticky-top" id="navbar">
                <Container>
                    <NavbarBrand href="/" className="text-white">Chase Oaks Chinese Ministry</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {/* <NavItem>
                                <NavLink href="/pastComponent" className="text-white">以前的分享</NavLink>
                            </NavItem> */}
                        </Nav>
                        <NavLink href="https://www.chaseoaks.org/chinese-ministry/" target="_blank" className="text-white">Chase Oaks Official</NavLink>
                    </Collapse>
                </Container>
            </Navbar>
            
            <Jumbotron id="jumbotron" fluid className="paral paralsec">
                <Container >
                    <h1 className="mx-auto text-black-40 shadow-lg p-3 rounded" id="todayShare">本日分享</h1>
                </Container>
            </Jumbotron>

            <MainSection />

            <div className="bg-light p-2 text-right font-weight-lighter">
                （封面图片来自网络 版权属于原作者）
            </div>
        </>
    )
}

export default Home;