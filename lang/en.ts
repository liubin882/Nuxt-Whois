export default defineI18nLocale(async locale => {
    return {
        app: {
            title: 'Nuxt Whois',
        },
        common: {
            actions: {
                delete: 'Delete',
                reset: 'Reset',
                confirm: 'Confirm',
            }
        },
        whois:{
            title: 'Whois Query',
            description: 'Query the Whois information of {domain}, including registrant contact information, domain status, DNS records and other detailed information. Quickly and accurately obtain domain ownership and registration information.',
            keywords: 'Whois query, {domain}, domain information, domain owner, domain registration information'
        },
        dns:{
            title: 'DNS Query',
            description: 'Query the DNS records of {domain}, including A records, AAAA records, CNAME records, MX records, NS records, TXT records, etc.',
            keywords: 'DNS query, {domain}, domain resolution, domain resolution record',
            //DNS query result
            dnsResult: 'DNS query result',
            //A record
            aRecord: 'A record',
            //NS record
            nsRecord: 'NS record',
            //SOA record
            soaRecord: 'SOA record',
        },
        history:{
            //Query history
            title: 'Query History',
            //Only keep the last 30/{{ styleStore.getHistory.length }} records
            tips: 'Only keep the last 30/{length} records',
            //Domain
            domain: 'Domain',
            //Query type
            type: 'Query Type',
            //Query time
            time: 'Query Time',
            //Operation
            actions: 'Actions',
            //There is currently no query history.
            empty: 'There is currently no query history.',
        },
        index: {
            tips: 'The information you submit for your query will not be recorded!',
            placeholder: 'Please enter a domain name',
            onSubmit: 'Submit',
            title: 'WHOIS and Dns Query Tool Website',
            description: 'Provide domain WHOIS query, domain DNS query, domain registrar query, domain registration information query and other services',
            keywords: 'Domain whois query, whois query, whois information query, whois query tool, whois query website, whois query api, whois query interface',
            support: 'Currently only the following suffixes are supported',
        },
        error:{
            formatDomain: 'Error formatting domain name',
            validDomain: 'Domain must contain a valid top-level domain',
            notFound: 'Domain not found',
        },
        result: {
            result: 'Query Result',
            title: 'WHOIS Query Result',
            description: 'Here is the WHOIS information for the domain you queried',
            domain: 'Domain Name',
            //数据源
            source: 'Source',
            //注册商
            registrar: 'Registrar',
            //更新日
            updateDate: 'Updated Date',
            //注册日
            createDate: 'Creation Date',
            //到期日
            expirationDate: 'Registry Expiry Date',
            //IANAID
            ianaId: 'IANAID',
            //状态
            status: 'Domain Status',
            //DNS
            dns: 'DNS',
            //DNSSEC
            dnssec: 'DNSSEC',
            //原始数据
            rawData: 'Raw Data',
        },
        footer: {
            text: '© 2024 Whois Query. All rights reserved.',
            api: 'API Documentation'
        },
        api: {
            h1: 'Whois Key Information Extraction API',
            //接口地址
            url: 'API URL',
            //请求方式
            method: 'Request Method',
            //请求参数
            params: 'Request Parameters',
            //输入参数
            input: 'Input Parameters',
            //输出参数
            output: 'Output Parameters',
            //返回处理后的whois字符串
            whois: 'Returns the processed whois string',
            //名称
            name: 'Name',
            //类型
            type: 'Type',
            //描述
            desc: 'Description',
            required: 'Required',
            domain: 'Domain',
            title: 'Whois Key Information Extraction API',
            description: 'Extract key information from domain WHOIS information, including registrar, creation date, expiration date, DNS, status, etc.',
            keywords: 'Domain whois query, whois query, whois information query, whois query tool, whois query website, whois query api, whois query interface',
        },
        popper: {
            //支持列表
            support: 'Support List',
            //history
            history: 'Query History',
            //支持的DNS服务器列表
            dns: 'Supported DNS Server List',
            setting: 'Website Settings',
            theme: 'Theme',
            language: 'Language',
            dnsChange: 'DNS Change',
        },
        settings: {
            //全局设置
            title: 'Global Settings',
            //历史记录保留
            history: 'History Retention',
            //链接跳转方式
            linkOpenType: 'Link Open Type',
            //选择榜单列表内容的跳转方式
            linkOpenTypeDesc: 'Select the jump method for the list content',
            //杂项设置
            miscellaneous: 'Miscellaneous Settings',
            //重置所有数据
            reset: 'Reset All Data',
            //重置所有数据，你的自定义设置都将会丢失
            resetDesc: 'Reset all data, your custom settings will be lost',
            //确认重置所有数据？你的自定义设置都将会丢失！
            resetConfirm: 'Confirm reset all data? Your custom settings will be lost!',
            // 当前窗口
            currentWindow: 'Current Window',
            //新窗口
            newWindow: 'New Window',
        },
    }
})
