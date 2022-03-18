import en from './en';

const translation = {
  general: {
    placeholder: '占位符',
    add_another: '+ Add Another',
    skip: '跳过',
    next: '下一步',
  },
  sign_in: {
    action: '登录',
    loading: '登录中...',
    error: '用户名或密码错误。',
    username: '用户名',
    password: '密码',
    terms_of_use: '用户协议',
    terms_agreement_prefix: '登录即表明您已经同意',
    continue_with: '更多',
  },
  register: {
    create_account: '创建新账户',
    action: '创建',
    loading: '创建中...',
    have_account: '已经有账户？',
  },
  admin_console: {
    title: '管理面板',
    copy: {
      pending: '拷贝',
      copying: '拷贝中',
      copied: '已拷贝',
    },
    form: {
      required: '必填',
    },
    errors: {
      unknown_server_error: '服务器发生未知错误。',
    },
    tab_sections: {
      overview: '概览',
      resource_management: '资源管理',
      user_management: '用户管理',
      help_and_support: '帮助与支持',
    },
    tabs: {
      get_started: '开始使用',
      dashboard: '仪表盘',
      applications: '应用集',
      api_resources: 'API 资源',
      sign_in_experience: '登录体验',
      connectors: '连接器',
      users: '用户管理',
      audit_logs: '审计日志',
      documentation: '文档',
      community_support: '社区支持',
      settings: '设置',
    },
    applications: {
      title: '应用集',
      subtitle:
        'Setup a mobile, single page or traditional application to use Logto for authentication.',
      create: 'Create Application',
      application_name: 'Application Name',
      application_description: 'Application Description',
      select_application_type: 'Select an application type',
      no_application_type_selected: 'You have to select an application type to proceed.',
      application_created:
        'The application {{name}} has been successfully created! \nNow finish your application settings.',
      client_id: 'Client ID',
      type: {
        native: {
          title: 'Native App',
          subtitle: 'Mobile, desktop, CLI and smart device apps running natively.',
          description: 'E.g.: iOS, Electron, Apple TV apps',
        },
        spa: {
          title: 'Single Page App',
          subtitle: 'A JavaScript front-end app that uses an API.',
          description: 'E.g.: Angular, React, Vue',
        },
        traditional: {
          title: 'Traditional Web',
          subtitle: 'Traditional web app using redirects.',
          description: 'E.g.: Node.js, Express, ASP.NET, Java, PHP',
        },
      },
      get_started: {
        header_description:
          '参考如下教程，将 Logto 集成到您的应用中。您也可以点击右侧链接，获取我们为您准备好的示范工程。',
        get_sample_file: '获取示范工程',
        title: '恭喜！您的应用已成功创建。',
        subtitle: '请参考以下步骤完成您的应用设置。首先，请选择您要使用的 Javascript 框架：',
        description_by_library: '本教程向您演示如何在 {{library}} 应用中集成 Logto 登录功能',
        title_step_1: '安装 Logto SDK',
        subtitle_step_1: '3 options | lorem ipsum dolor sit amet',
        title_step_2: '初始化得到 LogtoClient 实例',
        subtitle_step_2: '1 step | lorem ipsum dolor sit amet',
        title_step_3: 'Sign in',
        subtitle_step_3: '1 step | lorem ipsum dolor sit amet',
        title_step_4: 'Sign out',
        subtitle_step_4: '1 step | lorem ipsum dolor sit amet',
        title_step_5: '延伸阅读',
        subtitle_step_5: 'Tutorial and readings',
      },
    },
    application_details: {
      back_to_applications: '返回应用集',
      check_help_guide: 'Check Help Guide',
      settings: 'Settings',
      advanced_settings: 'Advanced Settings',
      application_name: 'Application Name',
      description: 'Description',
      authorization_endpoint: 'Authorization Endpiont',
      redirect_uri: 'Redirect URI',
      post_sign_out_redirect_uri: 'Post Sign Out Redirect URI',
      add_another: 'Add another',
      id_token_expiration: 'ID Token Expiration',
      refresh_token_expiration: 'Refresh Token Expiration',
      token_endpoint: 'Token Endpoint',
      user_info_endpoint: 'User Info Endpoint',
      save_changes: 'Save Changes',
    },
    api_resources: {
      title: 'API Resources',
      subtitle: 'Define APIs that you can consume from your authorized applications.',
      create: 'Create API Resource',
      api_name: 'API Name',
      api_identifier: 'API Identifier',
    },
    api_resource_details: {
      back_to_api_resources: 'Back to my API resources',
      check_help_guide: 'Check Help Guide',
      more_options: 'More Options',
      options_delete: 'Delete',
      settings: 'Settings',
      save_changes: 'Save Changes',
      token_expiration_time_in_seconds: 'Token Expiration Time (in seconds)',
      reminder: 'Reminder',
      delete_description:
        'This action cannot be undone. This will permanently delete the this application. Please enter the api resource name <span>{{name}}</span> to proceed.',
      enter_your_api_resource_name: 'Enter your API resource name',
      cancel: 'Cancel',
      delete: 'Delete',
      api_resource_deleted: 'The API Resource {{name}} deleted.',
    },
    connectors: {
      title: '连接器',
      subtitle: 'Setup connectors to enable passwordless and social sign in experience.',
      create: '添加连接器',
      set_up: '设置',
      tab_email_sms: '邮件/短信服务商',
      tab_social: '社会化登录',
      connector_name: '连接器',
      connector_type: '类型',
      connector_status: '状态',
      connector_status_enabled: '已启用',
      connector_status_disabled: '已禁用',
      social_connector_eg: '如: 微信登录，支付宝登录，微博登录',
      type: {
        email: '邮件服务商',
        sms: '短信服务商',
        social: '社会化登录',
      },
    },
    connector_details: {
      back_to_connectors: '返回连接器',
      check_readme: '查看文档',
      tab_settings: '设置',
      save_changes: '保存',
      save_error_empty_config: '请输入配置内容。',
      save_error_json_parse_error: '请输入符合 JSON 格式的配置。',
      save_success: '保存成功',
      send: 'Send',
      send_error_invalid_format: 'Invalid input',
      test_email_sender: 'Test your email sender',
      test_sms_sender: 'Test your SMS sender',
      test_message_sent: 'Test Message Sent!',
      test_sender_description: 'Test sender description',
      options: '操作',
      options_delete: '删除',
      options_change_email: '更换邮件服务商',
      options_change_sms: '更换短信服务商',
      more_options: '更多选项',
    },
    users: {
      title: '用户管理',
      subtitle: '管理已注册用户, 创建新用户，编辑用户资料。',
      create: '添加用户',
      user_name: '用户',
      application_name: '应用',
      latest_sign_in: '最后登录',
      create_form_username: '用户名',
      create_form_password: '密码',
      create_form_name: '姓名',
    },
    user_details: {
      back_to_users: '返回用户管理',
      created_title: '恭喜！用户创建成功',
      created_guide: '用户信息如下',
      created_username: '用户名：',
      created_password: '初始密码：',
      created_button_close: '关闭',
      created_button_copy: '拷贝',
      more_options: '更多操作',
      menu_delete: '删除用户',
      delete_title: '注意',
      delete_description: '本操作无法撤回，将删除此用户。',
      delete_cancel: '取消',
      delete_confirm: '删除',
      deleted: '用户已成功删除。',
      reset_password: {
        title: '重置密码',
        label: '新密码：',
        reset_password: '重置密码',
      },
    },
  },
};

const errors = {
  auth: {
    authorization_header_missing: 'Authorization 请求 header 遗漏。',
    authorization_token_type_not_supported: '不支持的 authorization 类型。',
    unauthorized: '未授权。请检查相关 credentials 和 scope。',
    jwt_sub_missing: 'JWT 中找不到 `sub`。',
  },
  guard: {
    invalid_input: '请求内容有误。',
    invalid_pagination: '分页参数有误。',
  },
  oidc: {
    aborted: '用户终止了交互。',
    invalid_scope: '不支持的 scope: {{scopes}}。',
    invalid_scope_plural: '不支持的 scope: {{scopes}}。',
    invalid_token: 'token 无效。',
    invalid_client_metadata: '无效 client metadata。',
    insufficient_scope: '请求 token 缺少一下权限: {{scopes}}。',
    invalid_request: '请求失败。',
    invalid_grant: '授权失败。',
    invalid_redirect_uri: '无效返回链接, 该 redirect_uri 未被此应用注册。',
    access_denied: '拒绝访问。',
    invalid_target: '请求资源无效。',
    unsupported_grant_type: '不支持的 grant_type。',
    unsupported_response_mode: '不支持的 response_mode。',
    unsupported_response_type: '不支持的 response_type。',
    provider_error: 'OIDC 错误: {{message}}。',
  },
  user: {
    username_exists_register: '用户名已被注册。',
    email_exists_register: '邮箱地址已被注册。',
    phone_exists_register: '手机号码已被注册。',
    invalid_email: '邮箱地址不正确。',
    invalid_phone: '手机号码不正确。',
    email_not_exists: '邮箱地址尚未注册。',
    phone_not_exists: '手机号码尚未注册。',
    identity_not_exists: '该社交账号尚未注册。',
    identity_exists: '该社交账号已被注册。',
  },
  password: {
    unsupported_encryption_method: '不支持的加密方法 {{name}}。',
    pepper_not_found: '密码 pepper 未找到。请检查 core 的环境变量。',
  },
  session: {
    not_found: 'Session not found. Please go back and sign in again.',
    invalid_credentials: '用户名或密码错误，请检查您的输入。',
    invalid_sign_in_method: '当前登录方式不可用。',
    insufficient_info: '登录信息缺失，请检查您的输入。',
    invalid_connector_id: '无法找到 ID 为 {{connectorId}} 的可用连接器。',
    connector_id_mismatch: '传入的连接器 ID 与 session 中保存的记录不一致。',
    connector_session_not_found: '无法找到连接器登录信息，请尝试重新登录。',
    unauthorized: '请先登录。',
    unsupported_prompt_name: '不支持的 prompt name。',
  },
  connector: {
    general: '连接器发生未知错误。',
    not_found: '找不到可用的 {{type}} 类型的连接器。',
    not_enabled: '连接器尚未启用。',
    invalid_config: '连接器配置错误。',
    template_not_found: '无法从连接器配置中找到对应的模板。',
    access_token_invalid: '当前连接器的 access_token 无效。',
    oauth_code_invalid: '无法获取 access_token，请检查授权 code 是否有效。',
    more_than_one_sms: '同时存在超过 1 个短信连接器。',
    more_than_one_email: '同时存在超过 1 个邮件连接器。',
  },
  passcode: {
    phone_email_empty: '手机号与邮箱地址均为空。',
    not_found: '验证码不存在，请先请求发送验证码。',
    phone_mismatch: '手机号码不匹配. 请尝试请求新的验证码。',
    email_mismatch: '邮箱地址不匹配. 请尝试请求新的验证码。',
    code_mismatch: '验证码不正确。',
    expired: '验证码已过期. 请尝试请求新的验证码。',
    exceed_max_try: '超过最大验证次数. 请尝试请求新的验证码。',
  },
  swagger: {
    invalid_zod_type: '无效的 Zod 类型，请检查路由 guard 配置。',
  },
  entity: {
    create_failed: '创建 {{name}} 失败。',
    not_exists: '该 {{name}} 不存在。',
    not_exists_with_id: 'ID 为 `{{id}}` 的 {{name}} 不存在。',
    not_found: '该资源不存在',
  },
};

const zhCN: typeof en = Object.freeze({
  translation,
  errors,
});

export default zhCN;
