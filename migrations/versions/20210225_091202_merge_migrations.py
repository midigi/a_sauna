"""merge migrations

Revision ID: 3f69c247040d
Revises: 5f9f6e60d776, 7fa80a31a9e5
Create Date: 2021-02-25 09:12:02.316687

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f69c247040d'
down_revision = ('5f9f6e60d776', '7fa80a31a9e5')
branch_labels = None
depends_on = None


def upgrade():
    pass


def downgrade():
    pass
