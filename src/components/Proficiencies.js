import Table from 'react-bootstrap/Table';

export default function Proficiencies() {
    return (
        <div>            
            <div className="section">            
                <h5 className="section-title section-header">Proficiencies</h5>
                
                <div>
                    <Table bordered hover className='proficiencies-table'>
                        <thead>
                            <th>Area</th>
                            <th>Skills</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Development</td>
                                <td>
                                    <strong> C#</strong>,
                                    <strong> .Net Core</strong>,
                                    <strong> .Net Framework</strong>,
                                    <strong> VueJS</strong>,
                                    <strong> Angular</strong>,
                                    <strong> Typescript</strong>,
                                    <strong> MySQL</strong>,
                                    Ionic, 
                                    JSON
                                </td>
                            </tr>
                            <tr>
                                <td>Unit Testing</td>
                                <td>
                                    <strong> MSTest</strong>,
                                    <strong> xUnit</strong>,
                                    <strong> Fluent Assertions</strong>,
                                    <strong> MOQ</strong>,
                                    <strong> Jasmine</strong>,
                                    <strong> Jest</strong>,
                                    <strong> Karma</strong>,
                                    Ionic,
                                    JSON
                                </td>
                            </tr>
                            <tr>
                                <td>IDE / Editors</td>
                                <td>
                                    <strong> Visual Studio</strong>,
                                    <strong> Visual Studio Code</strong>,
                                    Eclipse,
                                    Vi / Vim
                                </td>
                            </tr>
                            <tr>
                                <td>Operating Systems</td>
                                <td>
                                    <strong>Windows</strong>,
                                    <strong>Finx-RTOS(Linux)</strong>,
                                    <strong>Ubuntu</strong>,
                                    AOSP,
                                    Android
                                </td>
                            </tr>
                            <tr>
                                <td>Version Control / DevOps</td>
                                <td>
                                    <strong> Azure Devops</strong>,
                                    <strong> Git</strong>,
                                    <strong> GitHub</strong>,
                                    IBM RTC,
                                    Docker
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}