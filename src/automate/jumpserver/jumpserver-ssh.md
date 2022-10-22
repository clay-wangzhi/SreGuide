---
category: 自动化工具
tag:
  - jumpserver
---

# 获取 jumpserver  ssh 连接的私钥

迁移后，或者自己测试使用私钥连接时，找不到，可以通过如下方式获取

* jumpserver 版本： v2.19.2

```bash
docker exec -it jms_core /bin/bash
cd apps/
from assets.models import SystemUser
s = SystemUser.objects.get(name='root')
s.private_key
```

最后 `echo -n`  格式化 完整私钥